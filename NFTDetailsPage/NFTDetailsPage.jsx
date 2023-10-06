import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import { NFTDescription, NFTDetailsImg, NFTTabs } from "./NFTDetailsIndex";
import Style from "./NFTDetailsPage.module.css";
const NFTDetailsPage = ({nft,currentAccount}) => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg nft={nft}/>
        <NFTDescription nft={nft} currentAccount={currentAccount}/>
      </div>
    </div>
  );
};

export default NFTDetailsPage;
