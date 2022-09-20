import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ganache";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";

export default {
  solidity: {
    version: "0.8.15",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
    externalArtifacts: ["externalArtifacts/*.json"],
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "HTTP://127.0.0.1:8545",
      gas: 2100000,
      gasPrice: 3600000000,
      allowUnlimitedContractSize: true,
    },
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/BesWi0TOAU58fx9xjhKPpl27dSPng155`,
      accounts: [""],
      gas: 2100000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
    },
  },
};
