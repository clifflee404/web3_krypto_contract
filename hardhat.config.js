// https://eth-sepolia.g.alchemy.com/v2/9caPBYqlrzehln1jf0eSAKXbfQ5GNI9l
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/9caPBYqlrzehln1jf0eSAKXbfQ5GNI9l',
      accounts: ['de50718d9592b28b24c71c66ff56e203a5cf235feb60a2fe5d3885556066f46c'],
    },
  },
};