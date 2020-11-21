const Pair = artifacts.require("LendingPair");
const SushiSwapDelegateSwapper = artifacts.require("SushiSwapDelegateSwapper");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(SushiSwapDelegateSwapper, "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac");
  let pairMaster = await Pair.deployed();
  let swapper = await SushiSwapDelegateSwapper.deployed();
  // TODO: Make this work
  await pairMaster.setSwapper(swapper.address, true);
};
