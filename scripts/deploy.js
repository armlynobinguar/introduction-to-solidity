const hre = require("hardhat");

async function main() {
  // Compile the contracts
  await hre.run('compile');

  // Get the contract factory
  const Storage = await hre.ethers.getContractFactory("Storage");

  // Deploy the contract
  const storage = await Storage.deploy();

  // Wait for deployment to finish
  await storage.deployed();

  console.log("Storage contract deployed to:", storage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
