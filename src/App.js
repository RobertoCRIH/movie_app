import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";
import { useEffect, useState } from "react";


// API KEY: 1020a71c

const apiKey="http://www.omdbapi.com/?apikey=1020a71c";
const movie1={
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
};

function App() {
    const [movies, setMovies]=useState([]);
    const [searchTerm, setSearchTerm]= useState('');

    const searchMovies= async(title)=>{
        const response= await fetch(`${apiKey}&s=${title}`);
        const data= await response.json();

        console.log(data.Search);
        setMovies(data.Search);
        console.log(movies);
    }
    useEffect(()=>{
        searchMovies("Superman");
    },[]);
    return(
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="Search for movies..."
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)

                }/>

                <img src={SearchIcon} 
                alt="Search"
                onClick={()=>searchMovies(searchTerm)
                }
                />
            </div>

            {
                movies?.length>0
                ? (
                    <div className="container">
                        {movies.map((movie)=> 
                            <MovieCard movie1={movie}/>
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found...</h2>
                    </div>
                )
            }

            
        </div>
    )
}
export default App;