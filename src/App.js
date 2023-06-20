import "./App.css";
import { useEffect, useState } from "react";
import Searchfield from "./Components/Searchfield";
import axios from "axios";
import Gifcard from "./Components/Gifcard";

function App() {
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false); //tracks whether or not state loaded correctly
  const [gifs, setGifs] = useState([]); // state that stores current batch of gifs to be displayed

  //useEffect that loads trending gifs once the page loads
  useEffect(() => {
    loadTrending();
    //fetch gifs from GIPHY
  }, []);
  //square brackets above specify condition that will make useEffect run
  //here they are empty b/c loadTrending will load trending gifs once when the component is first loads

  async function loadTrending() {
    //function that loads trending gifs
    try {
      //try catch for retreival of trending gifs
      const result = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
      );
      setGifs(result.data.data); //gifs are returned by GIPHY as an array of gifs in the JSON
      console.log(result);
      setLoaded(true);
    } catch (error) {
      console.error("An error occured while loading trending gifs:", error);
    }
  }

  //fetching input to send to filter comp
  function fetchInput(searchInput) {
    setInput(searchInput);
  }

  //   //fetches gifs based on input from handleSubmit from searchfield
  async function fetchGifs(searchInput, filterOptions = {}) {
    let result = [];
    if (filterOptions.stickersOnly) {
      result = await axios.get(
        `https://api.giphy.com/v1/stickers/search?q=${searchInput}&api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
        //`http://api.giphy.com/v1/${filteroptions.stickersonly?stickers:gifs}/search?q=${searchInput}&api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
      );
    } else {
      result = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
      );
    }
    console.log(result);
    setGifs(result.data.data);
  }

  //returnRandom returns one random gif
  async function returnRandom() {
    try {
      const result = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
      );
      console.log("RANDOM");
      setGifs([result.data.data]);
    } catch (error) {
      console.error("An error occurred while loading random gif:", error);
    }
  }

  return (
    <div className="App">
      {/*HTML of the app*/}
      <h1 className="nav">Diana Hung's GIPHY API App</h1>
      <Searchfield fetchGifs={fetchGifs} fetchInput={fetchInput} />{" "}
      {/* <Filter setGifs={setGifs} input={input}></Filter> */}
      {/* wrap what comes after equal symbol, passing fetch function as a prop to searchfield */}
      {/*following will display trending when first loaded and results if an input is submitted*/}
      <button type="button" className="btn" onClick={returnRandom}>
        Display One Random Gif
      </button>
      <div className="gif-container">
        {loaded && gifs.map((gif) => <Gifcard key={gif.id} gif={gif} />)}
      </div>
      {/*each gif returned in the array is displayed in its own Gifcard*/}
      {console.log(gifs)}
    </div>
  );
}

export default App;
