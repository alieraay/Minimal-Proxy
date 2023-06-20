// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0 ;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./MetaToken.sol";

// MetaFactory contract deploys ERC20 tokens using a minimal proxy pattern.
// It keeps track of all created tokens in a mapping.
contract MetaFactory {
    // Stores the address of the base contract to be cloned.
    address public immutable i_MetaTokenContract;

    // Stores the number of created contracts.
    uint256 contractCount;

    // Maps an ID to an address of a created contract.
    mapping(uint256 => address) idToContractAddress;

    // Maps an ID to the total supply of a created contract.
    mapping(uint256 => uint256) idToTotalSupply;

    // The constructor initializes the factory with the address of the base contract.
    constructor(address baseContract){
        i_MetaTokenContract = baseContract;
    }

    // The createMeta function creates a new MetaToken contract with the specified total supply.
    // It increments the contract count and stores the created contract's address and total supply in the mappings.
    // It returns the address of the created contract.
    function createMeta(uint setTotalSupply) public returns(address) {
        address cloneAddress = Clones.clone(i_MetaTokenContract);
        MetaToken(cloneAddress).initialize(setTotalSupply);
        contractCount++;
        idToContractAddress[contractCount] = cloneAddress;
        idToTotalSupply[contractCount] = setTotalSupply;
        return cloneAddress;
    }

    // The viewCloneAddress function returns the address of a created contract given its ID.
    function viewCloneAddress(uint256 id) public view returns(address){
        return idToContractAddress[id];
    }

    // The viewCloneTotalSupply function returns the total supply of a created contract given its ID.
    // It does this by calling the totalSupply function on the MetaToken contract at the stored address.
    function viewCloneTotalSupply(uint256 id) public view returns(uint256){
        return MetaToken(idToContractAddress[id]).totalSupply();
    }
}
