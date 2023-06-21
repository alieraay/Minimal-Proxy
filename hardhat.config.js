require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("solidity-coverage")

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_URL = process.env.GOERLI_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
	solidity: "0.8.18",
	namedAccounts: {
		deployer: { default: 0 },
	},
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
		},
		goerli: {
			url: GOERLI_URL,
			acconts: [PRIVATE_KEY],
			chainId: 5,
			blockConfirmations: 6,
      saveDeployments: true,

		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},

};
