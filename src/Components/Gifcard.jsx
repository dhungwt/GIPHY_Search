import React, { useEffect, useState } from "react";


//component for individual gifs and how they appear on the page
const Gifcard = ({ gif }) => {
  return ( //displays gifs at their default height
    <div class="cards">
      <img src={gif.images.fixed_height.url}/>
    </div>
  );
};

export default Gifcard;