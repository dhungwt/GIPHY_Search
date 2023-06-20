import React, { useEffect, useState } from "react";
import axios from "axios";

function Filter (props){
 //component unused, no longer implemented but this is stored for reference
    //TO ADD append additional search terms from searchfield to return filtered content 
//if no sticker filter, filter on array

//  function filterGifs(){
//   setStickersOnly(true)
//   const result =  axios.get(
//     `http://api.giphy.com/v1/stickers/search?q=${props.input}&api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
//   );

//   console.log(result);
//   props.setGifs(result.data.data);
// }
  console.log(props.checked)
    return (
        <label className="filter">Stickers Only
          <input type="checkbox" onChange={props.handleStickersOnly} checked={props.checked}/>
      </label>
        );
        }
      



export default Filter;