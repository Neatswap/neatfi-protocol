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
    },
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/53342448efb04eaa91397f2ee55a190e",
      accounts: [
        "37ae2dbae9a1c9b9d7a824e0afe90bb61a4bad4af749400d27e1555afa78832c",
      ],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/53342448efb04eaa91397f2ee55a190e",
      accounts: [
        "37ae2dbae9a1c9b9d7a824e0afe90bb61a4bad4af749400d27e1555afa78832c",
      ],
    },
  },
};
