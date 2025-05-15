import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function Watched(props) {
  const {watchedMovies ,setVisibility, setMovieDetails, deleteFromWatched} = props;

  return (
    <>
      <h1>Movies You have Watched</h1>
    <div className='watchlist'>
    <p className="iconcontainer">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className="lefticon"
            onClick={() => setVisibility('')}
          />
        </p>
      {watchedMovies.map((movie,index)=>(
        <div key={index} className="card">
            <img src={movie.Poster} height={400}/>
            {movie.Title}
            <button className="btn" onClick={() => deleteFromWatched(movie)}>
              Remove <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Watched
