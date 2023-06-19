import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const isLoaded = true; //tracks whether or not page loaded succeffully
  const [gifs, setGifs] = useState([]); //

  const handleSearch = () => {
    //function returns gifs after input submitted
    //Regular Search: http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
    setGifs();
  };

  //useEffect that loads trending gifs once the page loads
  useEffect(() => {
    loadTrending();
    //fetch gifs from GIPHY
    //Trending Search: http://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY
  }, []);
  //square brackets on line 16 specify condition that will make useEffect run
  //here they are empty b/c loadTrending will load trending gifs once when the component is first loads

  const loadTrending = () => {};

  return (
    <div className="App">
      <header className="App-header"></header>
      //HTML of the app
      <h1 className="nav">Diana Hung's GIPHY API App</h1>
    </div>
  );
}

export default App;
