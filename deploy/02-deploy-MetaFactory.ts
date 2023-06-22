
import { developmentChains,  VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import verify from "../utils/verify";
import * as dotenv from "dotenv";
import { DeployFunction } from "hardhat-deploy/types";
import exp from "constants";
dotenv.config()

const deployMetaFactory: DeployFunction = async function(hre:HardhatRuntimeEnvironment) {
	const {deployments, network, getNamedAccounts} = hre
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
	let metaTokenAddress:string;

	const metaToken = await deployments.get("MetaToken");
	metaTokenAddress = metaToken.address;

	const args: string[] = [metaTokenAddress];

	const metaFactory = await deploy("MetaFactory", {
		from: deployer,
		args: args,
		log: true,
		waitConfirmations: developmentChains.includes(network.name) ? 1: VERIFICATION_BLOCK_CONFIRMATIONS,
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
export default deployMetaFactory