import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ganache";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-etherscan";

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
  defaultNetwork: "mainnet",
  etherscan: {
    apiKey: "",
  },
  networks: {
    localhost: {
      url: "HTTP://127.0.0.1:8545",
      gas: 2100000,
      gasPrice: 3600000000,
      allowUnlimitedContractSize: true,
    },
    hardhat: {},
    mainnet: {
      url: "",
      accounts: [""],
      gas: 2100000,
      maxFeePerGas: 20000000000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
    },
    goerli: {
      url: "",
      accounts: [""],
      gas: 2100000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
    },
  },
};
