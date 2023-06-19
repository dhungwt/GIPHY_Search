import React, { useEffect, useState } from "react";
//the search bar and its submit button

const Searchfield = ({ setInput,fetchGifs}) => {
   
    const handleChange = (event) => {
      //handles text entered in form
      setInput(event.target.value);
    };
  
    const handleSubmit = (event) => {
      //handles submit button click
      event.preventDefault(); //prevents results from loading before user enters terms and hits the form submit button
      try{
        fetchGifs(event.target.value);
      }catch (error){
        console.error(error)
      }
      
    };
  
    return (
      //html for the search field
      <div>
      <form onSubmit={handleSubmit}> {/* wraps input and button inside form */}
        <input type="text" value={""}
          placeholder="What do you want to find GIFs of?"
          onChange={handleChange} //after form is edited, search term is passed to handleChange to save input
          className="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
    );
  };


export default Searchfield;