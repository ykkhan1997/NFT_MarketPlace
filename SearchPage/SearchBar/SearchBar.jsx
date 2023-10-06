import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";
const SearchBar = ({onHandleSearch,onClearSearch}) => {
  const [search,setSearch]=useState("");
  const [searchItems,setSearchItems]=useState(search);
  useEffect(()=>{
    const timer=setTimeout(()=>setSearch(searchItems),1000);
    return ()=>clearTimeout(timer);
  },[searchItems]);
  useEffect(()=>{
    if(search){
      setSearch(onHandleSearch);
    }else{
      onClearSearch();
    }
  },[search]);
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon}/>
        <input onChange={(e)=>setSearchItems(e.target.value)} value={searchItems} type="text" placeholder="Type yout keyword..." />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;
