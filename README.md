# Hardhat Vue.js Starter Template

A starter template for Ethereum dApps that uses the following tools:

- Hardhat
- Waffle
- ethers.js
- Vue & Vuex
- Web3Modal
- Vue Bootstrap
- Vue Toasted
- Vue Gravatar

## Features

### Seamless connect/disconnect wallet experience

Web3Modal is used to support various different Ethereum wallets. When user switches between accounts and even chains, the UI quickly notices that and adapts to the change (account and ETH balance data are refreshed).

### Alert when not on mainnet

If user's wallet is not set to Mainnet, an unobtrusive yellow alert band shows up just above the navigation bar. The alert notifies the user which (testnet) chain they are currently using.

![](assets/yellow-alert-band.png)

### Storing contract addresses and ABIs on front-end

The deploy.js script automatically stores all contract ABIs and their respective addresses in the /frontend/src/contracts folder.

Addresses are separated from one another per contract name and also per chain ID.

Example (`addresses.json`):

```json
{
  "Token":{
    "1337":"0x1Cf865998BD3f20eB6BCdAda339AFf6ef2621beb",
    "3":"0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "1":"0xE2Df865998BD3f20117e037d1293367f032d93F6"
  },
  "Farm":{
    "1337":"0x1Cf865998BD3f20eB6BCdAda339AFf6ef2621beb",
    "3":"0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "1":"0xBCdAda33b67815678afecb365998BD3f2e26BCdA"
  }
}
```

## Run Vue app

```bash
cd frontend && npm run serve
```

## Tests

### Solidity/Hardhat

```bash
npx hardhat test
```

## Deployment to ganache

```bash
npx hardhat run scripts/deploy.js --network ganache
```

## Deployment to a remote blockchain

```bash
npx hardhat run scripts/deploy.js --network goerli
```

## Verify on Etherscan

```bash
npx hardhat --network mainnet etherscan-verify --api-key <apikey>
```
