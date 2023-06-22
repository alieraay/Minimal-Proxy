export interface networkConfigItem {
	name?: string;
	name__?: string;
	symbol__?: string;
}

export interface networkConfigInfo {
	[key: number]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
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

export const developmentChains = ["hardhat", "localhost"];
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
