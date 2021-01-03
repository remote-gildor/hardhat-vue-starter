const { expect } = require("chai");

describe("Calc contract", function() {
  let calcInstance = null;

  beforeEach(async () => {
    const Calc = await ethers.getContractFactory("Calc");
    calcInstance = await Calc.deploy();
  });
  

  it("gets the num value before a set function is called", async function() {
    const numValue = await calcInstance.getNum();
    expect(numValue).to.equal(0);
  });

  it("set the new num value and check if it changed", async function() {
    await calcInstance.setNum(5);

    const numValue = await calcInstance.getNum();
    expect(numValue).to.equal(5);
  });
});
