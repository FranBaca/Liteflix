import Home from './pages/Home/Home';
import {useState, useEffect} from "react"
import "./App.css"
function App() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [myMovies, setMyMovies] = useState([])
  
  useEffect(() => {
    const storageMovie = JSON.parse(localStorage.getItem('OwnMovies')) ?? [];
    setMyMovies([storageMovie]);
  }, []);

  return (
        <Home
          popularMovie={popularMovie}
          setPopularMovie={setPopularMovie}
          myMovies={myMovies}
          setMyMovies={setMyMovies}
        />
  );
}

export default App;
