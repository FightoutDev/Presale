const { ethers, upgrades } = require("hardhat");

async function main() {
  const time = Math.round(new Date().getTime() / 1000);
  console.log("Time is ", time);
  const Presale = await ethers.getContractFactory("Presale");
  const presale = await upgrades.deployProxy(Presale, [
    "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    time + 360,
    time + 3600000,
    [[6000000000], ["16650000000000000"]],
    [
      [1000, 3000, 10000, 25000, 50000, 100000, 250000, 500000],
      [100, 300, 600, 900, 1200, 1600, 2000, 2500],
    ],
    [
      [6, 8, 10, 12, 15, 18, 21, 24],
      [100, 300, 600, 900, 1200, 1600, 2000, 2500],
    ],
    3,
    0,
  ]);

  await presale.deployed();
  console.log(`Presale address is ${presale.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
