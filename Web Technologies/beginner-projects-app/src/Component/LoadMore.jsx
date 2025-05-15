import React, { useEffect, useState } from "react";
import inventory from "./DummyData/inventory";

// without using api data
function LoadMore(props) {
  const {itemsToDisplay} = props; 

  const [loadItems, setLoadItems] = useState(itemsToDisplay);

  return (
    <>
    <div className="loadCardItems">
    <div className="loadMore">
      {inventory.slice(0, loadItems).map((item, index) => (
        <div key={index} className="card">
          <p>{item.pic}</p>
          <p>{item.price} ---- {item.price}
          </p>
        </div>
      ))}
    </div>
    {loadItems!== inventory.length ? 
      <button onClick={()=>{setLoadItems(loadItems+3); console.log('LoadItems'+ loadItems, inventory.length)}}>Load More</button> :
      <p>No More Items</p>
    }
      </div>
    </>
  );
}

export default LoadMore;


