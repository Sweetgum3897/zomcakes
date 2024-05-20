
require("./node_modules/@nomicfoundation/hardhat-toolbox");
require('solidity-coverage');

require("./node_modules/@nomiclabs/hardhat-ethers");
//const { ALCHEMY_ID } = require("@wagmi/core/dist/declarations/src/constants");
/**
* @type import('hardhat/config').HardhatUserConfig
*/
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require('solidity-coverage');
const { ALCHEMY_ID } = require("@wagmi/core/dist/declarations/src/constants");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      goerli: {
         url: process.env.API_URL,

         defaultAlchemyApiKey: process.env.ALCHEMY_ID,
         defaultAlchemyApiKey: ALCHEMY_ID,

         accounts: [process.env.PRIVATE_KEY_DEPLOY]
      },
    },
    etherscan: {
         apiKey: process.env.ETHERSCAN_API,
    },
};



