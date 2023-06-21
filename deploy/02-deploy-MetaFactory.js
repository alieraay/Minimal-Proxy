const {
	networkConfig,
	developmentChains,
} = require("../helper-hardhat-config");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
	const chainId = network.config.chainId;
	let metaTokenAddress;

	if (developmentChains.includes(network.name)) {
		const metaToken = await deployments.get("MetaToken");
		metaTokenAddress = metaToken.address;
	} else {
		metaTokenAddress = networkConfig[chainId]["baseContract"];
	}

	const args = [metaTokenAddress];

	const metaFactory = await deploy("MetaFactory", {
		from: deployer,
		args: args,
		log: true,
		waitConfirmations: network.config.blockConfirmations || 1,
	});
	console.log("----****---DEPLOYER: ", deployer);

	if (
		!developmentChains.includes(network.name) &&
		process.env.ETHERSCAN_API_KEY
	) {
		await verify(metaFactory.address, args);
		log("-------------------------------------------------");
	}
};
module.exports.tags = ["all", "metaFactory"];
