import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { fetchContract,client } from "./constants";
import { toast } from "react-toastify";
import axios from "axios";
export const NftMarketPlaceContext = createContext();
import { useRouter } from "next/router";
import { alchemyUrl } from "./constants";
export const NFTMarketPlaceProvider = ({ children }) => {
  const router=useRouter();
  const [currentAccount,setCurrentAccount]=useState("");
  const uploadTopIpfs=async(file)=>{
    try {
      const added=await client.add({content:file});
      const url=`https://ipfs.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      toast.error("Something Wrong while uploading data to IPFS");
    }
  }
  const createNft=async(image,name,description,price,router)=>{
    if(!name||!description||!price||!image) return new Error(toast.error("Data is missing"));
    const data=JSON.stringify({name,description,image:image});
    try {
      const added=await client.add(data);
      const url=`https://ipfs.io/ipfs/${added.path}`;
      await createSale(url,price);
      router.push("/searchPage");
    } catch (error) {
      toast.error("Something wrong while creating NFT");
    }
  }
  const createSale=async(url,formInputPrice,isReselling,id)=>{
    try {
      const price=ethers.parseEther(formInputPrice);
      const provider=new ethers.BrowserProvider(window.ethereum);
      const signer=await provider.getSigner();
      const contract=fetchContract(signer);
      const listingPrice=await contract.getListingPrice();
      const transaction=!isReselling?(
        await contract.createToken(url,price,{value:listingPrice})
      ):(
        await contract.resellToken(id,price,{value:listingPrice})
      );
      await transaction.wait();
      toast.success("Transaction Successful");
    } catch (error) {
      toast.error("Something wrong while Resell NFT");
    }
  }
  const checkIfWalletIsConnected=async()=>{
    if(window.ethereum){
      const accounts=await window.ethereum.request({method:"eth_accounts"});
      if(accounts.length){
        setCurrentAccount(accounts[0]);
      }
    }else{
      console.log("No account found");
    }
  }
  const buyNft=async(nft)=>{
    try {
      const provider=new ethers.BrowserProvider(window.ethereum);
      const signer=await provider.getSigner();
      const contract=fetchContract(signer);
      const price=ethers.parseEther(nft.price);
      const transaction=await contract.createMarketSale(nft.tokenId,{value:price});
      await transaction.wait();
      router.push("/author");
    } catch (error) {
      toast.error("Something Wrong while buy NFT");
    }
  }
  const fetchNft=async()=>{
    try {
      const provider=new ethers.JsonRpcProvider(alchemyUrl);
      const contract=fetchContract(provider);
      const data=await contract.fetchMarketItems();
      const items=await Promise.all(
        data.map(async({tokenId,seller,owner,price:UnformattedPrice})=>{
          const tokenURI=await contract.tokenURI(tokenId);
          const {
            data:{image,name,description}
          }=await axios.get(tokenURI);
          const price=ethers.formatEther(UnformattedPrice.toString());
          return{
            tokenId:Number(tokenId),
            price,
            name,
            description,
            image,
            owner,
            seller
          }
        })
      );
      return items;
    } catch (error) {
      toast.error("Something Wrong While fetching data");
    }
  }
  const fetchMyNftOrListed=async(type)=>{
    try {
      const provider=new ethers.JsonRpcProvider(alchemyUrl);
      const contract=fetchContract(provider);
      const data=type=="fetchListedNfts"?await contract.fetchItemsListed():await contract.fetchMyNFTs();
      const items=await Promise.all(
        data.map(async({tokenId,seller,owner,price:UnformattedPrice})=>{
          const tokenURI=await contract.tokenURI(tokenId);
          const price=ethers.formatEther(UnformattedPrice.toString());
          const{
            data:{name,image,description}
          }=await axios.get(tokenURI);
          return{
            tokenId:Number(tokenId),
            name,
            image,
            description,
            price,
            tokenURI,
            owner,
            seller
          }
        })
      );
      return items;
    } catch (error) {
      toast.error("Something Wrong While fetching data");
    }
  }
  useEffect(()=>{
    checkIfWalletIsConnected();
    if(fetchNft,fetchMyNftOrListed){
      fetchNft();
      fetchMyNftOrListed();
    }
  },[]);
  return (
    <NftMarketPlaceContext.Provider value={{uploadTopIpfs,createNft,fetchNft,currentAccount,createSale,buyNft,fetchMyNftOrListed}}>
      {children}
    </NftMarketPlaceContext.Provider>
  );
};

export default NFTMarketPlaceProvider;
