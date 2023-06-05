require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "d07450d3218843debd13454d820c9184";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "15a2f073283a77da00523fd6f39c5c41db2e29591e1a9bca91e7e5d54b1da67f";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: "GX7NVEQDXWQY9HIZFHVAS7WIE76Q5DUW2I"
  }
};