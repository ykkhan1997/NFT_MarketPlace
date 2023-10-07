const hre=require("hardhat");

async function main(){
  const NFTMarketPlce =await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketPlace=await NFTMarketPlce.deploy();
  nftMarketPlace.waitForDeployment();
  console.log(nftMarketPlace.target);
}
main().then(()=>process.exit(0)).catch((error)=>{
  console.log(error);
  process.exit(1);
});