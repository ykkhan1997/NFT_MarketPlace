import React, { useContext, useEffect, useState } from "react";
import { getTopCreators } from "../TopCreators/topCreators";
import { NftMarketPlaceContext } from "../Context/NFTMarketPlace";
import Loader from "../Loader/Loader";
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex";
const Home = () => {
  const {currentAccount,connectWallet,fetchNft}=useContext(NftMarketPlaceContext);
  const [nfts,setNfts]=useState([]);
  const [nftCopy,setNftCopy]=useState([]);
  useEffect(()=>{
    fetchNft().then((items)=>{
      if(items){
        setNfts(items.reverse());
        setNftCopy(items);
      }
    },[]);
  });
  const creators=getTopCreators(nfts);
  console.log(creators);
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive/>
      {creators.length==0?<Loader/>:<FollowerTab TopCreators={creators}/>}
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter/>
      <NFTCard NFTData={nfts}/>
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
