import React, { useEffect, useState } from "react";

function LoadMore2({itemsToDisplay}) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loadItems, setLoadItems] = useState(itemsToDisplay);
  const [loading,setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";

  async function handleFetch() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
    //   console.log(data);
      setItems(data);
    } catch (err) {
      setError(err);
    } finally{
        setLoading(false);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [url]);

  return (
    <div className="shoppingItems">
        <div className="ItemsContainer">
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p style={{color:'red'}}>Error: {error}</p>
          ): (
            items.slice(0,loadItems).map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.title} width={200} />
                <div>
                <h3>{item.title}</h3>
                <p style={{color:'chocolate',fontSize:'16px'}}>${item.price}</p>
                </div>
              </div>
            ))
          )}
      </div>
      {!loading && loadItems !== items.length ?
      <button onClick={()=>setLoadItems(loadItems+4)}>Load More</button> :
      <p>No More Items</p>
      
    }
    </div>
  );
}

export default LoadMore2;
