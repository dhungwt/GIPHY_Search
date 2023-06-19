import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [loaded, setLoaded] = true; //tracks whether or not page loaded succeffully
  const [gifs, setGifs] = useState([]); //
  const [input, setInput] = useState(""); //state that stores user's input in search
  //default is an empty string

  const handleSearch = () => {
    //function returns gifs after input submitted
    //Regular Search: http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
    setGifs();
  };

  //useEffect that loads trending gifs once the page loads
  useEffect(() => {
    loadTrending();
    //fetch gifs from GIPHY
  }, []);
  //square brackets above specify condition that will make useEffect run
  //here they are empty b/c loadTrending will load trending gifs once when the component is first loads

  const loadTrending = () => { //function that loads trending gifs
    setLoaded(true);
    try{ //try catch for retreival of trending gifs
    const result = await axios.get(
      `http://api.giphy.com/v1/gifs/trending?api_key=ptLg3iWyFUnQLRh4KmRvlxEBtdswbnMM`
    );
    setGifs(result.data.data); //gifs are returned by GIPHY as an array of gifs in the JSON
    setLoading(false); //set back to false after trending gifs load
  };
}catch{
 console.error(("An error occured while loading treanding gifs:", error);
 setLoading(false); //set back to false after error encountered
}

async function fetchGifs(){
  setLoaded(true);
  const result = await axios.get(`https://zip-api.eu/api/v1/info/US-${input}`) 
  console.log(result)
  setGifs(result.data.data); 
  setLoading(false);
}

  return (
    <div className="App">
      <header className="App-header"></header>
      //HTML of the app
      <h1 className="nav">Diana Hung's GIPHY API App</h1>
      <searchfield/>
      {/*following will display trending when first loaded and results if an input is submitted*/}
      {loaded ? (
        loadTrending;
      ) : (
        gifs.map((gif) => <Gifcard key={gif.id} gif={gif} />) //each gif returned in the array is displayed in its own Gifcard
      )}
      <gifcard />
    </div>
  );
}

export default App;
