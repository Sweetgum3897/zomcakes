<<<<<<< HEAD
require("./node_modules/@nomicfoundation/hardhat-toolbox");
require('solidity-coverage');

require("./node_modules/@nomiclabs/hardhat-ethers");
//const { ALCHEMY_ID } = require("@wagmi/core/dist/declarations/src/constants");
/**
* @type import('hardhat/config').HardhatUserConfig
*/
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

=======
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require('solidity-coverage');
const { ALCHEMY_ID } = require("@wagmi/core/dist/declarations/src/constants");
/**
* @type import('hardhat/config').HardhatUserConfig
*/
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
require("@nomiclabs/hardhat-ethers");
>>>>>>> 0c2e349e6265b04f80dbbed780ebd19940c3a15b
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      goerli: {
         url: process.env.API_URL,
<<<<<<< HEAD
         defaultAlchemyApiKey: process.env.ALCHEMY_ID,
=======
         defaultAlchemyApiKey: ALCHEMY_ID,
>>>>>>> 0c2e349e6265b04f80dbbed780ebd19940c3a15b
         accounts: [process.env.PRIVATE_KEY_DEPLOY]
      },
    },
    etherscan: {
         apiKey: process.env.ETHERSCAN_API,
    },
};
<<<<<<< HEAD
=======

>>>>>>> 0c2e349e6265b04f80dbbed780ebd19940c3a15b
