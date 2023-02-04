require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-waffle");
require('solidity-coverage');
const { defaultAlchemyApiKey } = require("@wagmi/core/dist/declarations/src/constants");
/**
* @type import('hardhat/config').HardhatUserConfig
*/
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      goerli: {
         url: "https://eth-goerli.g.alchemy.com/v2/rhhDiOumtYmeouWg7IhhzJqsKl0G-gAu",
         defaultAlchemyApiKey: ALCHEMY_ID,
         accounts: [`0x${PRIVATE_KEY}`]
      }
    }
};
