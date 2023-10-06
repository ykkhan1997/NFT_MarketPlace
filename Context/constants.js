const ethers=require("ethers");
const dotenv=require("dotenv");
dotenv.config({path:".env.config"});
const contractAddress=process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
const ABI=require("../artifacts/contracts/NFTMarketplace.sol/NftMarketPlace.json");
import {create as IPFSHTTPClient} from "ipfs-http-client";
const contractAbi=ABI.abi;
export const fetchContract=(ProviderOrSigner)=>new ethers.Contract(
    contractAddress,
    contractAbi,
    ProviderOrSigner
);
const projectId=process.env.NEXT_PUBLIC_PROJECT_ID
const projectSecret=process.env.NEXT_PUBLIC_SECRET_KEY
const auth="Basic "+Buffer.from(projectId+ ":" +projectSecret).toString("base64");
export const client=IPFSHTTPClient({
    host:"ipfs.infura.io",
    protocol:"https",
    port:5001,
    headers:{
        authorization:auth
    }
});
export const alchemyUrl=process.env.NEXT_PUBLIC_API_URL

