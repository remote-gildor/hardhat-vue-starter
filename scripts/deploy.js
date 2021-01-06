const fs = require('fs');
const path = require('path');

async function main() {
  let contractName = "Calc";

  const [deployer] = await ethers.getSigners();

  let networkData = await deployer.provider.getNetwork()
  console.log("Chain ID:", networkData.chainId);

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy the contract
  const contractFactory = await ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy();

  console.log("Contract address:", contract.address);
  
  // copy the contract JSON file to front-end and add the address field in it
  fs.copyFileSync(
    path.join(__dirname, "../artifacts/contracts/" + contractName + ".sol/" + contractName + ".json"), //source
    path.join(__dirname, "../frontend/src/contracts/" + contractName + ".json") // destination
  );

  // update the addresses.json file with the new contract address
  let addressesFile = fs.readFileSync(path.join(__dirname, "../frontend/src/contracts/addresses.json"));
  let addressesJson = JSON.parse(addressesFile);
  
  if (!addressesJson[contractName]) {
    addressesJson[contractName] = {};
  }
  
  addressesJson[contractName][networkData.chainId] = contract.address;

  fs.writeFileSync(
    path.join(__dirname, "../frontend/src/contracts/addresses.json"), 
    JSON.stringify(addressesJson)
  ); 
}
  
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
