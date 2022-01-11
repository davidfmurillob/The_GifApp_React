import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs(category); //Renaming the data

    
  return (
    <>
      <h3 className="animate__animated animate__fadeInUp">{category}</h3>
      {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}

      <div className="card-grid">
        {
            images.map((img) => (
                <GifGridItem 
                {...img} 
                key={img.id} 
                />
        )
        )
        }
      </div>
    </>
  );
};
