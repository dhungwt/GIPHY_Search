import React, { useEffect, useState } from "react";


//component for individual gifs and how they appear on the page
const Gifcard = ({ gif }) => {
  return ( 
    //displays gifs 
    <div className="cards">
      <img src={gif?.images.fixed_height.url}/> 
      {/* ? for conditiona chaining, checks if next elt is defined, chain stops if next image is undefined */}
    </div>
  );
};

export default Gifcard;