import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

import "dotenv/config";
import "hardhat-deploy";
import "solidity-coverage";
import { HardhatUserConfig } from "hardhat/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "Your private key";
const GOERLI_URL = process.env.GOERLI_URL || "Goerli api key";
const ETHERSCAN_API_KEY =
	process.env.ETHERSCAN_API_KEY || "Your etherscan API key";

const config: HardhatUserConfig = {
	solidity: "0.8.18",
	namedAccounts: {
		deployer: {
			default: 0,
		},
	},
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
		},
		goerli: {
			url: GOERLI_URL,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
			chainId: 5,
			saveDeployments: true,
		},
	},
	etherscan: {
		apiKey: {
			goerli: ETHERSCAN_API_KEY,
		},
	},
};

export default config;
