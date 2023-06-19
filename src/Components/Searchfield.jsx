import React, { useEffect, useState } from "react";
//the search bar and its submit button

const Searchfield = ({ fetchGifs}) => {
  const [input, setInput] = useState(""); //state that stores user's input in search
    const handleChange = (event) => {
      //handles text entered in form
      setInput(event.target.value); 
    };
  
    const handleSubmit = (event) => {
      //handles submit button click
      event.preventDefault(); //prevents results from loading before user enters terms and hits the form submit button
      try{
        fetchGifs(input); //setting search key
      }catch (error){
        console.error(error)
      }
      
    };
  
    return (
      //html for the search field
      <div>
      <form onSubmit={handleSubmit}> {/* wraps input and button inside form */}
        <input type="text" value={input}
          placeholder="Search..."
          onChange={handleChange} //after form is edited, search term is passed to handleChange to save input
          className="search"
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <p> {/*filter for stickers dropdown*/}</p>
      </form>
    </div>
    );
  };


export default Searchfield;