import React,{useState,useEffect,useContext} from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";
import images from "../img";
import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";

import { NftMarketPlaceContext } from "../Context/NFTMarketPlace";
import Loader from "../Loader/Loader";
const searchPage = () => {
  const {fetchNft}=useContext(NftMarketPlaceContext);
  const[nfts,setNfts]=useState([]);
  const [nftCopy,setNftCopy]=useState([]);
  const onHandleSearch=(value)=>{
    const filteredNfts=nfts.filter(({name})=>name.toLowerCase().includes(value.toLowerCase()));
    if(filteredNfts.length===0){
      setNfts(nftCopy);
    }else{
      console.log(filteredNfts);
      setNfts(filteredNfts);
    }
  }
  const onClearSearch=()=>{
    if(nfts.length && nftCopy.length){
      setNfts(nftCopy);
    }
  }
  useEffect(()=>{
    fetchNft().then((items)=>{
      setNfts(items.reverse());
      setNftCopy(items);
    });
  },[]);
  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch}/>
      <Filter />
      {nfts.length===0?<Loader/>:<NFTCardTwo NFTData={nfts}/>}
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
