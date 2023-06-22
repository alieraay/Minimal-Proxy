import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { VERIFICATION_BLOCK_CONFIRMATIONS, developmentChains } from '../helper-hardhat-config';
import  verify  from '../utils/verify'
import * as dotenv from "dotenv";
dotenv.config()

const ETHERSCAN_API_KEY:string = process.env.ETHERSCAN_API_KEY as string

const deployMetaToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const args: any = [];

  const metaToken = await deploy('MetaToken', {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: developmentChains.includes(network.name) ? 1: VERIFICATION_BLOCK_CONFIRMATIONS,
  });
  
  console.log('----****---DEPLOYER: ', deployer);

  if (!developmentChains.includes(network.name) && ETHERSCAN_API_KEY) {
    await verify(metaToken.address, args);
    log('-------------------------------------------------');
  }
}

export default deployMetaToken;
deployMetaToken.tags = ['all', 'metaToken'];
