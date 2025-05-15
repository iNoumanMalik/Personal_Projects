import React, { useState } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const API_KEY = "a9118a3a";


function HomeCover(props) {
  const { handleSearchChange, setVisibility, setFilteredMovies } = props;
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState(null);

  const fetchData = async (searchString) => {
    try {
      const response = await Axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
      );
      if (response.data && response.data.Search) {
        console.log(response.data);
        console.log(response.data.Search);
        updateMovieList(response.data.Search);
        setFilteredMovies(response.data.Search);
      } else {
        updateMovieList([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      updateMovieList([]);
    }
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    handleSearchChange(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="homecover">
      <Navbar />
      <div className="content">
        <p className="heading">Find Trending Movies and Shows</p>
        <p className="description">
          CinemaScope is a social platform for sharing your taste in film. Use
          it as a diary to record your opinions about films as you watch them
          and keep a watchlist of films you’d like to see.
        </p>

        <div className="search-container">
          <input
            placeholder="Search Movies & Shows..."
            value={searchQuery}
            onChange={onTextChange}
            className="search"
          />
        </div>
        
        <div className="track-movies">
            <button className="btn" onClick={() => setVisibility("Watchlist")}>
              Watchlist <FontAwesomeIcon icon={faHeart}/>
            </button>
            <button className="btn" onClick={() => setVisibility("Watched")}>
              Watched <FontAwesomeIcon icon={faCheck}/>
            </button>
          </div>
      </div>
    </div>
  );
}

export default HomeCover;
