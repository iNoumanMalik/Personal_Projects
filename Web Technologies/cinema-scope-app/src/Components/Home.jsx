import React from "react";
import HomeCover from "./HomeCover";

function Home(props) {
  const {
    movieDisplay,
    setMovieDisplay,
    setMovieDetails,
    filteredMovies,
    setFilteredMovies,
    handleSearchChange,
    setVisibility,
    setCurrentCategory
  } = props;

  return (
    <>
     
      <HomeCover
        handleSearchChange={handleSearchChange}
        setVisibility={setVisibility}
        setFilteredMovies={setFilteredMovies}
        
      />

     
      <div className="homepage">
        <p className="title">All-Time Blockbusters</p>
        
        <div className="select">
          <label htmlFor="category">Select Category: </label>
          <select
            id="category"
            onChange={(e) => {
              console.log(e.target.value); 
              setCurrentCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="crime">Crime</option>
          </select>
        </div>

        <div className="movies-con">
          {filteredMovies && filteredMovies.length > 0 ? (
            filteredMovies.slice(0, movieDisplay).map((movie, index) => (
              <div
                key={index}
                className="movie-item"
                onClick={() => setMovieDetails(movie)}
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  height={400}
                  className="movieimage"
                />
                <p style={{width:'250px'}} className="movie-title">{movie.Title}</p>
              </div>
            ))
          ) : (
            <p>No Movies Found</p>
          )}
        </div>

        {filteredMovies && filteredMovies.length > movieDisplay ? (
          <button
            className="homepage-load-btn"
            onClick={() => setMovieDisplay(movieDisplay + 10)}
          >
            Load More
          </button>
        ) : (
          <p>No More Items</p>
        )}
      </div>
    </>
  );
}

export default Home;
