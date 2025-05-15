import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as FilledHeart } from "@fortawesome/free-solid-svg-icons";
import { API_KEY } from "./HomeCover";
import Axios from "axios";

import StartRating from "./StarRating";
import ReviewPopup from "./ReviewPopup";

function MovieDetail(props) {
  const {
    movieDetails,
    setMovieDetails,
    handleWatchedMovie,
    handleWatchListMovie,
    label,
    setLabel,
    searchQuery,
  } = props;

  const [movieInfo, setMovieInfo] = useState();
  const [heartIcon, setHeartIcon] = useState(faHeart);
  const [plusIcon, setPlusIcon] = useState(faPlus);

  useEffect(() => {
    if (movieDetails) {
      console.log("API Key:", API_KEY);
      console.log("Movie Details:", movieDetails);
      console.log("Movie Title:", movieDetails.Title);

      Axios.get(
        `https://www.omdbapi.com/?i=${movieDetails.imdbID}&apikey=${API_KEY}`
      )
        .then((response) => {
          console.log("Fetched Movie Info:", response.data); 
          setMovieInfo(response.data); 
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
          setMovieInfo(movieDetails);
        });
    }
  }, [movieDetails]);

  
  useEffect(() => {
    if (movieInfo) {
      console.log("Movie Info:", movieInfo); 
    }
  }, [movieInfo]);

  return (
    <div className="showMovieDetails">
      <div className="container">
        <p className="iconcontainer">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className="lefticon"
            onClick={() => {
              setMovieDetails(null);
              setLabel("");
            }}
          />
          Back
        </p>
        {movieInfo ? (
          <div className="detail-container">
            <div className="image">
              <img src={movieInfo.Poster} width={500} height={500} />
              <div className="review">
                <StartRating />
                <div>
                  {/* <p className="write-review">Write Review 
            <FontAwesomeIcon icon={faFileAlt}/></p> */}
                  <ReviewPopup />
                </div>
              </div>
            </div>

            <div className="detials">
              <h1>{movieInfo.Title}</h1>
              <p>
                <span>Type: </span>
                {movieInfo.Type}
              </p>
              <p>
                <span>Year: </span>
                {movieInfo.Year}
              </p>

              <p>
                <span>IMDB Rating: </span>
                {movieInfo.imdbRating}
              </p>
              {movieInfo.Genre && (
                <p>
                  <span>Genre: </span>
                  {movieInfo.Genre}
                </p>
              )}

              {movieInfo.Director && (
                <p>
                  <span>Director: </span>
                  {movieInfo.Director}
                </p>
              )}

              {movieInfo.Actors && (
                <p>
                  <span>Actors: </span>
                  {movieInfo.Actors}
                </p>
              )}

              {movieInfo.Plot && (
                <p style={{ width: 600 }}>
                  <span>Plot: </span>
                  {movieInfo.Plot}
                </p>
              )}
              <div className="track-movies">
                <button
                  className="btn"
                  onClick={() => {
                    handleWatchListMovie(movieDetails);
                    setHeartIcon(FilledHeart);
                    setPlusIcon(faPlus);
                  }}
                >
                  Add to Watchlist <FontAwesomeIcon icon={heartIcon} />
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    handleWatchedMovie(movieDetails);
                    setPlusIcon(faCheck);
                    setHeartIcon(faHeart);
                  }}
                >
                  Add to Watched <FontAwesomeIcon icon={plusIcon} />
                </button>
              </div>
              <p style={{ color: "red" }}>{label}</p>
            </div>
          </div>
        ) : (
          <>
            <p className="fetching-title">Fetching...</p>
            <div className="bouncing-balls">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
