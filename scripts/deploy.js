const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account: ", deployer.address);

    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const deployed = await NFTMarketplace.deploy()

    console.log("NFTMarketplace is deployed at: ", deployed.address)
};

deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });