const networkConfig = {
	31337: {
		name: "hardhat",
        name__: "MetaToken",
        symbol__: "META",
	},
	5: {
		name: "goerli",
        name__: "MetaToken",
        symbol__: "META",
	},
	1: {
		name: "mainnet",
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
