import React, {useState} from 'react';
import {AddCategory,GifGrip} from "./Components/index.js";

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['One Punch']);

    const onAddCategory = (onNewCatergory) => {

        if (categories.includes(onNewCatergory))
            return;

        setCategories([onNewCatergory,...categories]);
    }

    return (
        <>
            <h1>
                GifExpertApp
            </h1>
            <AddCategory  onNewCatergory={(value) => onAddCategory(value) }/>

            {categories.map(category => {
                return (
                    <GifGrip category={category} key={category}/>
                );
            })}
        </>
    )
}