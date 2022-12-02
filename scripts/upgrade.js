const { ethers, upgrades } = require("hardhat");

async function main() {
  const time = Math.round(new Date().getTime() / 1000);
  console.log("Time is ", time);
  const Presale = await ethers.getContractFactory("Presale");
  const presale = await upgrades.upgradeProxy(
    "0x14306De71Cbb2231D1fea73e102D59a50650d0B6",
    Presale
  );

  console.log(`Upgraded`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
