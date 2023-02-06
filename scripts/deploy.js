const hre  = require("hardhat");

async function main() {
   const ZomCakes = await hre.ethers.getContractFactory("ZomCakes");
  
    // Start deployment, returning a promise that resolves to a contract object
    const zomCakes = await ZomCakes.deploy();
   
    console.log("Contract deployed to address:", zomCakes.address);
    await zomCakes.deployed();
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
