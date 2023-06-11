const hre  = require("hardhat");

async function main() {
   const ZomCakes = await hre.ethers.getContractFactory("ZomCakes");
  
    // Start deployment, returning a promise that resolves to a contract object
    const zomCakes = await ZomCakes.deploy();
   
    console.log("Contract deployed to address:", zomCakes.address);
    await zomCakes.deployed();
<<<<<<< HEAD
    const receipt = await zomCakes.deployTransaction.wait();
    console.log("gasUsed:" , receipt.gasUsed);
=======
>>>>>>> 0c2e349e6265b04f80dbbed780ebd19940c3a15b
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
<<<<<<< HEAD
    });
=======
    });
>>>>>>> 0c2e349e6265b04f80dbbed780ebd19940c3a15b
