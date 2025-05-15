import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";


function WatchList(props) {
  const {watchListMovies ,setVisibility, deleteFromWatchList} = props;
  return (
    <>
      <h1>Movies You Want to Watch</h1>
    <div className='watchlist'>
    <p className="iconcontainer">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className="lefticon"
            onClick={() => setVisibility('')}
          />
        </p>
      {watchListMovies.map((movie,index)=>(
        <div key={index} className="card">
            <img src={movie.Poster} height={400}/>
            {movie.Title}
            <button className="btn" onClick={() => deleteFromWatchList(movie)}>
              Remove <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
      ))}
    </div>
    </>
  )
}

export default WatchList
