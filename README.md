# Presale contract

<p>Upgradeable presale contract to create presales with different rounds/tiers with bonus functionality like lockInDuration/purchaseAmount and allows users to linearly claim the amount they have purchased and additional bonus recived on their purchaseAmount and lockInDuration.</p>

## External Dependencies

Please double check the addresses below on mainnet.

1. Chainlink Oracle for ETH price in USD - `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`
2. USDT token address - `0xdAC17F958D2ee523a2206206994597C13D831ec7`


## Required Parameters

The following parameters must be set according to the presale.

3. `startTime` - (unix epoch time in sec.) Time at which sale will start.
4. `endTime` - (unix epoch time in sec.) Time at which sale will end.
5. `rounds` - Array of cummulative tokens to be sold in each round at a particular price. For example if 6 billion tokens are to be sold at pice of 0.0165$ each.
   the array should be populated as -`_rounds = [ [600000000],[16650000000000000] ];`
6. `tokenQuantity` - Array of USD amount and relative percentage which will help to calculate bonus for each threshold.For example if the user purchases 65,000 tokens which are equivalent to ~1080$ then the user will get 1% additionaly as bonus.
   the array should be populated as - `_tokenQuantity = [ [1000, 3000, 10000, 25000, 50000, 100000, 250000, 500000],[100, 300, 600, 900, 1200, 1600, 2000, 2500] ]`
7. `lockup` - Array of months and relative percentage which will help to calculate bonus for each threshold.For example if the user locks in his tokens for 24 months then user will get 25% additionaly as bonus.
   the array should be populated as - `_lockup =  [[6, 8, 10, 12, 15, 18, 21, 24],[100, 300, 600, 900, 1200, 1600, 2000, 2500] ]`

NOTE : Make sure that internal arrays of `lockup` and `tokenQuantity` arrays are of same length.

8. `defaultLockup` - default amount of time in months the funds should be locked.
9. `initialClaimPercent` - percentage of tokens that should be unlocked immediately to claim after purchase.

<h3>IMP!!</h3>
   The current contract assumes that all the sale tokens have 18 decimals, if that is not the case for any presale - please change the value in the "claim" functions accordingly.


## Deployment and Upgrade steps.

1. Create a new `.env` file with private key of a wallet and Infura API key for the selected network.

2. Update the deploy script `deploy` with correct Chainlink oracle and USDT token address of the network.

3. Run the script to deploy an upgradeable sale contract(deploys - ProxyAdmin, Proxy and Sale contract).

```
npx hardhat run scripts/deploy.js
```

4. Deployment details can be found under the `.openzeppelin` folder for the deployed network.

5. To upgrade the sale contract, either create a new version or update the existing code and run the upgrade by making necessary changes.

```
npx hardhat run scripts/upgrade.js
```
