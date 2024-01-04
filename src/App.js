import {useEffect,useState} from 'react';
import MovieCard from './MovieCard'
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=aec50ae8';

const movie1 = {
        "Title": "Spiderman the Verse",
        "Year": "2019–",
        "imdbID": "tt12122034",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
    }


const App= () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); // get data from it

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className = "search">
                <input
                    placeholder='Search for movies ...'
                    value="Superman" // searching value
                    onChange={() => {}}
                />
                <img
                    src = {searchIcon}
                    alt = "search"
                    onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0
                ? (
                <   div className='container'>
                        {movies.map((movie) => ( // mapping
                        <MovieCard movie={movie}></MovieCard> // render the multiple MovieCards
                    ))}
                </div>
                ) : (
                    <div className = "empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;