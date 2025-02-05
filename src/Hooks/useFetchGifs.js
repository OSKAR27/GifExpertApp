import {useEffect, useState} from "react";
import {getGif} from "../Helpers/getGifs.js";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGif(category);
        setImages(newImages);
        setisLoading(false);
    }

    useEffect(()=>{
        getImages();
    },[]);

    return {
        images: images,
        isLoading : isLoading
    }

}