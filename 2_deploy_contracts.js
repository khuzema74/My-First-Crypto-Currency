var PkyToken = artifacts.require("./PkyToken.sol");
var PkyTokenSale = artifacts.require("./PkyTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(PkyToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(PkyTokenSale, PkyToken.address, tokenPrice);
  });
};
