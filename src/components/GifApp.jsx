import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  // const handleAdd = ()=>{
  //    setCategories (['HunterXHunter', ...categories])
  // }

  return (
    <>
    <h2>The GifApp</h2>
      <div>
        
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
          {
            categories.map(category => (
              <GifGrid 
                key={category} 
                category = {category}
              />
            ))
          }
        </ol>
      </div>
    </>
  );
};

export default GifApp;
