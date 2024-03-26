/* const hre = require("hardhat");

async function main() {
  const taggingSystem = await hre.ethers.getContractFactory("TaggingSystem");
  const TaggingSystem = await taggingSystem.deploy();

  await TaggingSystem.deployed();

  console.log("Library deployed to:", TaggingSystem.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

*/

// deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log('Deploying contracts with the account:', deployer.address);

    const upload = await ethers.getContractFactory('Upload');
    const Upload = await upload.deploy();
    
   await Upload.waitForDeployment();

    console.log(`Upload address:, ${Upload.target}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
//contract address :- 0x5FbDB2315678afecb367f032d93F642f64180aa3