import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../Hooks/useFetchGifs.js";

export const GifGrip = ({category}) => {

    const {images, isLoading} =  useFetchGifs(category);

    return (
        <>
            {
                isLoading && ( <h2>Cargando ... </h2> )
            }

            <h3>{category}</h3>
            <p>{category}</p>
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    );
}