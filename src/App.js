import "./App.css";
import { useEffect, useState } from "react";
import Searchfield from "./Components/Searchfield";
import Gifcard from "./Components/Gifcard";
import axios from "axios";

function App() {
  const [gifs, setGifs] = useState([]); //
  const [input, setInput] = useState(""); //state that stores user's input in search
  //default is an empty string

  //useEffect that loads trending gifs once the page loads
  useEffect(() => {
    loadTrending();
    //fetch gifs from GIPHY
  }, []);
  //square brackets above specify condition that will make useEffect run
  //here they are empty b/c loadTrending will load trending gifs once when the component is first loads

  async function loadTrending (){ //function that loads trending gifs
    try{ //try catch for retreival of trending gifs
    const result = await axios.get(
      `http://api.giphy.com/v1/gifs/trending?api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
    );
    setGifs(result.data.data); //gifs are returned by GIPHY as an array of gifs in the JSON
}catch (error){
 console.error("An error occured while loading treanding gifs:", error);
}
};

//fetches gifs based on input
async function fetchGifs(searchInput){
  const result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`) 
  console.log(result)
  setGifs(result.data.data); 
}

  return (
    <div className="App">
      <header className="App-header"></header>
      {/*HTML of the app*/}
      <h1 className="nav">Diana Hung's GIPHY API App</h1>
      <Searchfield fetchGifs={fetchGifs} setInput = {setInput}/> {/* wrap what comes after equal symbol, passing fetch function as a prop to searchfield */}
      {/*following will display trending when first loaded and results if an input is submitted*/}
       {gifs.map(gif => <Gifcard key={gif.id} gif={gif} /> )} 
        {/*each gif returned in the array is displayed in its own Gifcard*/}
      <Gifcard />
    </div>
  );
}

export default App;
