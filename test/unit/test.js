const { assert, expect } = require("chai");
const { ethers, deployments, getNamedAccounts, network } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");
const { BigNumber } = require("ethers");

!developmentChains.includes(network.name)
	? describe.skip
	: describe("MetaToken and MetaFactory Test", function () {
			let MetaToken, MetaFactory, token, factory, deployer, user1;

			const createMetaToken = async (initialSupply) => {
				const txResponse = await factory.createMeta(initialSupply);
				const txReceipt = await txResponse.wait(1);
				const newTokenAddress = txReceipt.events[0].address;
				return ethers.getContractAt("MetaToken", newTokenAddress);
			};

			beforeEach(async function () {
				deployer = (await getNamedAccounts()).deployer;
				accounts = ethers.getSigners();
				user1 = accounts[1];
				await deployments.fixture(["all"]);

				MetaToken = await ethers.getContractFactory("MetaToken");
				token = await MetaToken.deploy();
				await token.deployed();

				MetaFactory = await ethers.getContractFactory("MetaFactory");
				factory = await MetaFactory.deploy(token.address);
				await factory.deployed();
			});

			it("Should initialize the MetaToken correctly", async function () {
				expect(await token.name()).to.equal("MetaToken");
				expect(await token.symbol()).to.equal("META");
			});

			it("Should create a new MetaToken using MetaFactory", async function () {
				const initialSupply = 1000;

				const NewToken = await createMetaToken(initialSupply);
				const checkInitial = BigNumber.from(10).pow(18).mul(initialSupply);
				console.log(await NewToken.totalSupply());
				console.log(checkInitial);
				expect((await NewToken.totalSupply()).toString()).to.equal(
					checkInitial.toString()
				);
			});

			it("Check clone mapping", async function () {
				const initialSupply = 1000;
				const txResponse = await factory.createMeta(initialSupply);
				const txReceipt = await txResponse.wait(1);

				const newTokenAddress = txReceipt.events[0].address;
				const checkview = await factory.viewCloneAddress(1);
				assert.equal(checkview, newTokenAddress);
				console.log(checkview);
			});

			it("Checking total supply mapping", async function () {
				const initialSupply = 1000;

				const txResponse = await factory.createMeta(initialSupply);
				const txReceipt = await txResponse.wait(1);

				const newTokenAddress = txReceipt.events[0].address;
				const NewToken = await ethers.getContractAt(
					"MetaToken",
					newTokenAddress
				);
				const mappingTotalSupply = await factory.viewCloneTotalSupply(1);
				const actualTotalSupply = await NewToken.totalSupply();
				assert.equal(Number(mappingTotalSupply), Number(actualTotalSupply));
			});
			it("Should not allow initialize to be called twice", async function () {
				const initialSupply = 1000;
				await token.initialize(initialSupply);

				await expect(token.initialize(initialSupply)).to.be.revertedWith(
					"Initializable: contract is already initialized"
				);
			});
	  });
