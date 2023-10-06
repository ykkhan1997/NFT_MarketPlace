require("@nomicfoundation/hardhat-toolbox");
const dotenv=require("dotenv");
dotenv.config({path:".env.config"});
const alchemyUrl=process.env.NEXT_PUBLIC_API_URL
const privateKey=process.env.NEXT_PUBLIC_PRIVATE_KEY
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"polygonMumbai",
  networks:{
    polygonMumbai:{
      url:alchemyUrl,
      accounts:[privateKey]
    }
  }

};
