const fs = require('fs');
const path = require('path');

async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const contractFactory = await ethers.getContractFactory("Calc");
    const contract = await contractFactory.deploy();
  
    console.log("Contract address:", contract.address);
    
    // copy the contract JSON file to front-end and add the address field in it
    let contractJsonFile = fs.readFileSync(path.join(__dirname, "../artifacts/contracts/Calc.sol/Calc.json"));
    let contractJson = JSON.parse(contractJsonFile);
    contractJson.address = contract.address; // add address to contract JSON
    fs.writeFileSync(path.join(__dirname, "../frontend/src/contracts/Calc.json"), JSON.stringify(contractJson)); 
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
