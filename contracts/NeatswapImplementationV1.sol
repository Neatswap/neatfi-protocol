// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {INeatFi} from "./interfaces/INeatFi.sol";
import {UUPSUpgradeable} from "./lib/proxy/UUPSUpgradeable.sol";
import {AccessControlUpgradeable} from "./lib/access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "./lib/utils/ReentrancyGuardUpgradeable.sol";
import {AssetStructsUpgradeable} from "./lib/protocolStorage/assetStorage/AssetStructsUpgradeable.sol";
import {AssetEnumsUpgradeable} from "./lib/protocolStorage/assetStorage/AssetEnumsUpgradeable.sol";
import {ContextUpgradeable} from "./lib/utils/ContextUpgradeable.sol";

/**
 * @title NeatSwapImplementationV1
 * @author NeatFi
 * @notice This is an implementation contract of the NeatFi protocol through
 *         an actor key. Any 3-d party contract that wants to interact with
 *         the NeatFi functionality needs to have an approved actor key.
 *         This contract implements all three currently available modules of
 *         the NeatFi protocol (AssetSwap, AssetSell, AssetAuction). Upon the
 *         addition of new modules or updating the functionality of the existing
 *         modules, this contract will be upgraded as well.
 */
contract NeatSwapImplementationV1 is
    ContextUpgradeable,
    UUPSUpgradeable,
    AccessControlUpgradeable,
    ReentrancyGuardUpgradeable
{
    address public neatFiProtocolAddress;

    string public name;
    string public currentVersion;

    /**
     * @dev Sets the version for the current implementation of this contract.
     */
    function _setVersion(string memory newVersion)
        internal
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        currentVersion = newVersion;
    }

    /**
     * @dev Requests an actor key from NeatFi through INeatFi interface.
     *      This function must be implemented as is in any 3-d party contract
     *      that wants to interact with the NeatFi protocol.
     */
    function requestActorKey() public onlyRole(DEFAULT_ADMIN_ROLE) {
        INeatFi(neatFiProtocolAddress).requestActorKey(address(this));
    }

    /**
     * @dev A public payable function to make an Order asset. For Swap
     *      Orders, msg.value must be equal to the protocol fee for Swap
     *      Order creation. For other Orders, it should be 0.
     * @param tokens - The array of Token assets to be included in the Order.
     * @param orderType - The enum ype of an Order.
     *                    0 - SELL,
     *                    1 - ENGLISH_AUCTION,
     *                    2 - DUTCH_AUCTION,
     *                    3 - SWAP
     *                    4 - BID
     * @param expirationTime - The expiration timestamp of the Order.
     * @param startPrice - The starting price of the Order.
     * @param actorKey - The actor key of the Actor contract.
     * @return orderHash - The hash of the Order.
     */
    function makeOrder(
        AssetStructsUpgradeable.Token[] calldata tokens,
        AssetEnumsUpgradeable.AssetOrderType orderType,
        uint256 expirationTime,
        uint256 startPrice,
        bytes32 actorKey
    ) public payable returns (bytes32 orderHash) {
        return
            INeatFi(neatFiProtocolAddress).makeOrder{value: msg.value}(
                tokens,
                orderType,
                payable(_msgSender()),
                block.timestamp,
                expirationTime,
                startPrice,
                actorKey
            );
    }

    /**
     * @dev A public function to make a Bid Order for a Swap Order.
     *      Bid type Order creation is free of any protocol fee.
     * @param tokens - The array of Token assets to be included in the Bid.
     * @param orderHash - The hash of the Swap Order.
     * @param actorKey - The actor key of the Actor contract.
     * @return bidHash - The hash of the Bid type Order.
     */
    function makeBid(
        AssetStructsUpgradeable.Token[] calldata tokens,
        bytes32 orderHash,
        bytes32 actorKey
    ) public returns (bytes32 bidHash) {
        return
            INeatFi(neatFiProtocolAddress).makeBid(
                tokens,
                _msgSender(),
                block.timestamp,
                orderHash,
                actorKey
            );
    }

    /**
     * @dev A public function for the Order maker to cancel the Order.
     * @param orderHash - The hash of the Order.
     */
    function cancelOrder(bytes32 orderHash) public {
        INeatFi(neatFiProtocolAddress).cancelOrder(_msgSender(), orderHash);
    }

    /**
     * @dev A public function for the Order maker to approve
     *      and resolve a Swap Order.
     * @param orderHash - The hash of the Order.
     * @param bidHash - The hash of the Bid type Order.
     * @param orderData - Optional additional data to include with the transaction.
     * @param bidData - Optional additional data to include with the transaction.
     */
    function approveAndResolveSwap(
        bytes32 orderHash,
        bytes32 bidHash,
        bytes calldata orderData,
        bytes calldata bidData
    ) public {
        INeatFi(neatFiProtocolAddress).approveAndResolveSwap(
            _msgSender(),
            orderHash,
            bidHash,
            orderData,
            bidData
        );
    }

    /**
     * @dev An public function for the buyer to immediately
     *         buy Token assets of a Sell Order.
     * @param orderHash - The hash of the Order.
     * @param data - Optional additional data to include with the transaction.
     */
    function buyItNow(bytes32 orderHash, bytes calldata data) public payable {
        INeatFi(neatFiProtocolAddress).buyItNow{value: msg.value}(
            _msgSender(),
            orderHash,
            data
        );
    }

    /**
     * @dev A public function for the maker to decrease the price of
     *      a Dutch Auction.
     * @param orderHash - The hash of the Order.
     * @param newPrice - The new end price of the Order.
     */
    function decreaseDucthAuctionPrice(bytes32 orderHash, uint256 newPrice)
        public
    {
        INeatFi(neatFiProtocolAddress).decreaseDucthAuctionPrice(
            _msgSender(),
            orderHash,
            newPrice
        );
    }

    /**
     * @dev A public function for maker to increase the price
     *      of an English Auction.
     * @param orderHash - The hash of the Order.
     * @param newPrice - The new end price of the Order.
     */
    function increaseEnglishAuctionPrice(bytes32 orderHash, uint256 newPrice)
        public
    {
        INeatFi(neatFiProtocolAddress).increaseEnglishAuctionPrice(
            _msgSender(),
            orderHash,
            newPrice
        );
    }

    /**
     * @dev A public function for the bidder to commit native tokens
     *      (i.e. Eth for Ethereum) for an English Auction. The native
     *      tokens are not transferred from the bidder yet.
     * @param orderHash - The hash of the Order.
     * @param bidValue - The committment of the bidder in native tokens.
     */
    function bidForEnglishAuction(bytes32 orderHash, uint256 bidValue) public {
        INeatFi(neatFiProtocolAddress).bidForEnglishAuction(
            _msgSender(),
            orderHash,
            bidValue
        );
    }

    /**
     * @dev A public function for the bidder to commit native tokens
     *      (i.e. Eth for Ethereum) for a Dutch Auction. The native
     *      tokens are not transferred from the bidder yet.
     * @param orderHash - The hash of the Order.
     * @param bidValue - The committment of the bidder in native tokens.
     */
    function bidForDutchAuction(bytes32 orderHash, uint256 bidValue) public {
        INeatFi(neatFiProtocolAddress).bidForDutchAuction(
            _msgSender(),
            orderHash,
            bidValue
        );
    }

    /**
     * @dev A public function for the maker to approve the last bidder.
     * @param orderHash - The hash of the Order.
     */
    function approveLastBid(bytes32 orderHash) public {
        INeatFi(neatFiProtocolAddress).approveLastBid(_msgSender(), orderHash);
    }

    /**
     * @dev A public function for the approved bidder to claim the
     *      English Auction Order.
     * @param orderHash - The hash of the Order.
     * @param data - Optional additional data to include with the transaction.
     */
    function claimEnglishAuction(bytes32 orderHash, bytes calldata data)
        public
        payable
    {
        INeatFi(neatFiProtocolAddress).claimEnglishAuction(
            _msgSender(),
            orderHash,
            data
        );
    }

    /**
     * @dev A public function for the approved bidder to claim the
     *      Dutch Auction Order.
     * @param orderHash - The hash of the Order.
     * @param data - Optional additional data to include with the transaction.
     */
    function claimDutchAuction(bytes32 orderHash, bytes calldata data)
        public
        payable
    {
        INeatFi(neatFiProtocolAddress).claimDutchAuction(
            _msgSender(),
            orderHash,
            data
        );
    }

    /** Initializers */

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(DEFAULT_ADMIN_ROLE)
    {}

    function initialize() public initializer {
        __UUPSUpgradeable_init();
        __AccessControl_init();

        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        name = "NeatFi Protocol";
        _setVersion("1.0.0");
    }
}
