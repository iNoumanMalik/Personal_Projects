import React, { useEffect, useState } from 'react'

function JokeGenerator() {
  
  const [joke,setJoke] = useState(null);
  const [error,setError] = useState(null);

  async function fetchData(){
    try{
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
      const data = await response.json();
      setJoke(data);
      console.log(joke);
      
    }catch(e){
      setError(e);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='image--slider'>
      {error?(
        <p>Error</p>)
      : joke ?(
        <div>
        <h3>{joke.setup}</h3>
        <p>{joke.joke || joke.punchline || joke.delivery}</p>
        </div>
      )
      : <p>Loading...</p>}
      <button style={{backgroundColor:'lightgreen', color:'green', marginBottom:'30px'}} onClick={fetchData}>New Joke</button>
    </div>
  )
}

export default JokeGenerator
