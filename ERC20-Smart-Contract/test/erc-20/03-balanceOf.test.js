const Artifact = artifacts.require('../contracts/ERC20');

contract('ERC20-03-balanceOf.test 🚀', (accounts) => {

    const tokenName = 'TestToken';
    const tokenSymbol = 'BLP';
    const tokenDecimals = 18;
    const tokenTotalSupply = 10000000000;
    
    let contractInstance;
    const ownerAddress = accounts[0];

    before(() => {
        web3.eth.defaultAccount = ownerAddress;
    });

    beforeEach(async () => {
        contractInstance = await Artifact.new(tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply);
    });

    it('balanceOf success', async () => {
        const result = await contractInstance.balanceOf(ownerAddress, { from: ownerAddress });
        
        assert.equal(result.toNumber(), tokenTotalSupply, 'balance is wrong');
    });
});