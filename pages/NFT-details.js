import React, { useContext, useEffect, useState } from "react";
import { NftMarketPlaceContext } from "../Context/NFTMarketPlace";
//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";
import { useRouter } from "next/router";
const NFTDetails = () => {
  const {currentAccount}=useContext(NftMarketPlaceContext);
  const router=useRouter();
  const [nft,setNft]=useState({
    tokenId:"",
    name:"",
    image:"",
    description:"",
    price:"",
    owner:"",
    seller:"",
    tokenURI:""
  });
  useEffect(()=>{
    if(!router.isReady)return;
    setNft(router.query); 
  },[router.isReady]);
  return (
    <div>
      <NFTDetailsPage nft={nft} currentAccount={currentAccount}/>
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
