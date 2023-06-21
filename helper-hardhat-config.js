const networkConfig = {
	31337: {
		name: "hardhat",
		baseContract: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // TODO:
        name__: "MetaToken",
        symbol__: "META",
	},
	5: {
		name: "goerli",
		baseContract: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // TODO: this is the address of MetaToken.sol contract
        name__: "MetaToken",
        symbol__: "META",
	},
	1: {
		name: "mainnet",
		baseContract: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // TODO:
        name__: "MetaToken",
        symbol__: "META",
	},
};

const developmentChains = ["hardhat"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

module.exports = {
	networkConfig,
	developmentChains,
	VERIFICATION_BLOCK_CONFIRMATIONS,
};
