import React,{useState,useEffect,useContext} from 'react'
import Image from 'next/image';
import { NftMarketPlaceContext } from '../Context/NFTMarketPlace';
import FormStyle from "../AccountPage/Form/Form.module.css";
import Style from "../styles/resellToken.module.css";
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from '../components/componentsindex';

const ReSellToken = () => {
    const {createSale}=useContext(NftMarketPlaceContext);
    const router=useRouter();
    const [price,setPrice]=useState("");
    const [image,setImage]=useState("");
    const {id,tokenURI}=router.query;
    const fetchNft=async()=>{
        if(tokenURI)return;
        const {data}=await axios.get(tokenURI);
        setImage(data.image);
        setPrice(data.price);
    }
    useEffect(()=>{
        fetchNft();
    },[id]);
    const resellToken=async()=>{
        try {
            await createSale(tokenURI,price,true,id);
            router.push("/author");
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div className={Style.resellToken}>
        <div className={Style.resellToken_box}>
            <h1>Resell Your Token</h1>
            <div className={FormStyle.Form_box_input}>
                <label htmlFor='name'>Resell Token</label>
                <input
                type='number'
                placeholder='Please enter your price'
                onChange={(e)=>setPrice(e.target.value)}
                className={FormStyle.Form_box_input_userName}
                />
            </div>
            <div className={Style.resellToken_box_image}>
                {
                    image && <Image
                    src={image}
                    alt='Resell NFT'
                    width={400}
                    height={400}
                    className={Style.resellToken_box_image}
                    />
                }
            </div>
            <div className={Style.resellToken_box_button}>
                <Button
                btnName={`ReSell Token`}
                handleClick={()=>resellToken()}
                />
            </div>
        </div>
    </div>
  )
}

export default ReSellToken