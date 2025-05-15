import React, { useEffect, useState } from "react";
import moviesData from "./private/data";
import comedy from "./private/comedy";
import horror from "./private/horror";
import fantasy from "./private/fantasy";
import crime from "./private/crime";
import drama from "./private/drama";

import Home from "./Components/Home";
import MovieDetail from "./Components/MovieDetail";
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
import "./App.css";

function App() {
  const [movieDisplay, setMovieDisplay] = useState(10);
  const [movieDetails, setMovieDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [visibility, setVisibility] = useState("");
  const [label, setLabel] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  const categoryMovie = () => {
    switch (currentCategory) {
      case "drama":
        setFilteredMovies(drama);
        break;
      case "comedy":
        setFilteredMovies(comedy);
        break;
      case "horror":
        setFilteredMovies(horror);
        break;
      case "fantasy":
        setFilteredMovies(fantasy);
        break;
      case "crime":
        setFilteredMovies(crime);
        break;
      case "all":
        setFilteredMovies(moviesData);
        break;
        case "default":
        setFilteredMovies(moviesData);
        break;

      default:
        setFilteredMovies(moviesData);
    }
  };

  useEffect(() => {
    categoryMovie();
  }, [currentCategory]);
 

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const filtered = moviesData.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleWatchedMovie = (movie) => {
    
    const updatedWatchList = watchListMovies.filter(
      (item) => item.Title !== movie.Title
    );
    setWatchListMovies(updatedWatchList);
  
   
    const isInWatched = watchedMovies.some((item) => item.Title === movie.Title);
    if (!isInWatched) {
      setWatchedMovies([...watchedMovies, movie]);
      setLabel(""); 
    } else {
      setLabel("Movie already in Watched");
    }
  
    console.log("Watched Movies:", watchedMovies);
    console.log("Updated Watchlist:", updatedWatchList);
  };
  
  const handleWatchListMovie = (movie) => {
   
    const updatedWatchedMovies = watchedMovies.filter(
      (item) => item.Title !== movie.Title
    );
    setWatchedMovies(updatedWatchedMovies);
  
  
    const isInWatchList = watchListMovies.some((item) => item.Title === movie.Title);
    if (!isInWatchList) {
      setWatchListMovies([...watchListMovies, movie]);
      setLabel(""); 
    } else {
      setLabel("Movie already in Watchlist");
    }
  
    console.log("Watchlist Movies:", watchListMovies);
    console.log("Updated Watched Movies:", updatedWatchedMovies);
  };
  

  const deleteFromWatched = (movie) => {
    const updatedWatchedMovies = watchedMovies.filter(
      (item) => item.Title !== movie.Title
    );
    setWatchedMovies(updatedWatchedMovies);
  };

  const deleteFromWatchList = (movie) => {
    const updatedWatchListMovies = watchListMovies.filter(
      (item) => item.Title !== movie.Title
    );
    setWatchListMovies(updatedWatchListMovies);
  };

  return (
    <div>
      {visibility ? (
        visibility === "Watchlist" ? (
          <WatchList
            watchListMovies={watchListMovies}
            setVisibility={setVisibility}
            deleteFromWatchList={deleteFromWatchList}
          />
        ) : (
          <Watched
            watchedMovies={watchedMovies}
            setVisibility={setVisibility}
            setMovieDetails={setMovieDetails}
            deleteFromWatched={deleteFromWatched}
          />
        )
      ) : movieDetails ? (
        <MovieDetail
          movieDetails={movieDetails}
          setMovieDetails={setMovieDetails}
          handleWatchedMovie={handleWatchedMovie}
          handleWatchListMovie={handleWatchListMovie}
          label={label}
          setLabel={setLabel}
          searchQuery={searchQuery}
        />
      ) : (
        <Home
          movieDisplay={movieDisplay}
          setMovieDisplay={setMovieDisplay}
          setMovieDetails={setMovieDetails}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
          handleSearchChange={handleSearchChange}
          searchQuery={searchQuery}
          setVisibility={setVisibility}
          setCurrentCategory={setCurrentCategory}
        />
      )}
    </div>
  );
}

export default App;
