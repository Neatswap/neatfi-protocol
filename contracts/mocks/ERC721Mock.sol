// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./tokens/ERC721.sol";
import "../lib/utils/Ownable.sol";

contract MyToken is ERC721, Ownable {
    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
