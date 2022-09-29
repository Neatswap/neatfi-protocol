// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./tokens/ERC1155.sol";
import "../lib/utils/Ownable.sol";

contract MyToken is ERC1155, Ownable {
    constructor() ERC1155("https://test.com") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }
}
