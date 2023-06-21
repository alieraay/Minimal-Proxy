const { developmentChains } = require("../helper-hardhat-config");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
    const args = []

	const metaToken = await deploy("MetaToken", {
		from: deployer,
        args:args,
		log: true,
		waitConfirmations: network.config.blockConfirmations || 1,
	});
	console.log("----****---DEPLOYER: ", deployer);

	if (
		!developmentChains.includes(network.name) &&
		process.env.ETHERSCAN_API_KEY
	) {
		await verify(metaToken.address,args);
		log("-------------------------------------------------");
	}
};
module.exports.tags = ["all", "metaToken"];
