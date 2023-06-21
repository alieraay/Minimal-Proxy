// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

// MetaToken is an ERC20 token which uses the Initializable contract from OpenZeppelin.
// This makes it suitable to be used with a minimal proxy pattern.
contract MetaToken is ERC20, Initializable {
    // The constructor sets the token name and symbol.
    // These cannot be changed after deployment.
    constructor() ERC20("MetaToken", "META") {
        _disableInitializers();
    }

    // The initialize function sets the initial supply of tokens.
    // It uses the initializer modifier from the Initializable contract to ensure
    // it can only be called once, which is important when using the minimal proxy pattern.
    // The initial supply is minted to the contract itself for no reason

    function initialize(uint256 totalSupply) public initializer {
        _mint(address(this), totalSupply * 10 ** uint(decimals()));
    }
}
