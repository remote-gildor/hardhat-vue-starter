require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545/",
      saveDeployments: true
    }
    //goerli: {
    //  url: "https://eth-goerli.alchemyapi.io/v2/" + process.env.ALCHEMY_API_KEY,
    //  accounts: [process.env.ALCHEMY_DEPLOYMENT_KEY]
    //}
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
