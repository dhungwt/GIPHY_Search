import React, { useEffect, useState } from "react";
import Filter from "./Filter";
//the search bar and its submit button

const Searchfield = ({ fetchGifs, fetchInput}) => {
  const [input, setInput] = useState(""); //state that stores user's input in search
  const [stickersOnly, setStickersOnly] = useState(false);
    const handleChange = (event) => {
      //handles text entered in form
      setInput(event.target.value); 
    };
  
    const handleSubmit = (event) => {
      //handles submit button click
      event.preventDefault(); //prevents results from loading before user enters terms and hits the form submit button
      try{
        fetchGifs(input, {
          stickersOnly
        }); //setting search key into App.js, passing value of stickerOnly back to app.js as a parameter in the funct
        fetchInput(input);
      }catch (error){
        console.error(error)
      }
      
    };
  
    const handleStickersOnly = () => {
      setStickersOnly(!stickersOnly) //turns stickers on and off
      console.log("LOGGED")
    }

    return (
      //html for the search field
      <div>
      <form onSubmit={handleSubmit}> {/* wraps input and button inside form */}
        <input type="text" value={input}
          placeholder="Search..."
          onChange={handleChange} //after form is edited, search term is passed to handleChange to save input
          className="search"
        />
        <label className="filter">Stickers Only
          <input type="checkbox" onChange={handleStickersOnly} checked={stickersOnly}/>
      </label>
        <button type="submit" className="btn">
          Submit
        </button>
        {/* <button type="button" className="btn" onClick={returnRandom}>
          Random
        </button> */}
      </form>
    </div>
    );
  };


export default Searchfield;