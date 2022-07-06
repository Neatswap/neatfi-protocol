require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "HTTP://127.0.0.1:9545",
    },
    hardhat: {},
    ropsten: {
      url: `https://ropsten.infura.io/v3/53342448efb04eaa91397f2ee55a190e`,
      accounts: [
        "37ae2dbae9a1c9b9d7a824e0afe90bb61a4bad4af749400d27e1555afa78832c",
      ],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/53342448efb04eaa91397f2ee55a190e`,
      accounts: [
        "37ae2dbae9a1c9b9d7a824e0afe90bb61a4bad4af749400d27e1555afa78832c",
      ],
    },
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
