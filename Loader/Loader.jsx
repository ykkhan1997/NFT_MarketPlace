import React from 'react'
import Image from 'next/image';
import image from "../img";
import Style from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={Style.Loader}>
        <div className={Style.Loader_Box}>
            <div className={Style.Loader_Box_Image}>
                <Image
                src={image.Loader}
                alt='Loader'
                width={200}
                height={200}
                objectFit='Cover'
                className={Style.Loader_Box_Image_img}
                />
            </div>
        </div>
    </div>
  )
}

export default Loader