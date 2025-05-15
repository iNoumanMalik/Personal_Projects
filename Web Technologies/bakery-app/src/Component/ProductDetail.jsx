import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Navbar";

function ProductDetail(props) {
  const { itemDetail, setItemDetail, cartTotal, setCartTotal, setCartDisplay,itemsInCart, setItemsInCart} = props;

  const handleAddToCart = (itemTitle,itemPrice,itemId)=>{
    setItemsInCart([...itemsInCart,{title: itemTitle, price: itemPrice, id: itemsInCart.length +1}])
    setCartTotal(cartTotal + itemPrice);
    // console.log('Price: '+itemPrice, 'Title:'+itemTitle)
    // console.log(itemsInCart);
    // console.log(cartTotal)
  }

  
  return (
    <div className="productDetailContainer">
        <Navbar setCartDisplay={setCartDisplay}/>
    <div className="productDetail">
        <FontAwesomeIcon icon={faArrowLeft} size="2x" className="lefticon" onClick={()=>setItemDetail(null)}/>

      
      <div key={itemDetail.id} className="picture">
        <img src={itemDetail.picture} width={700} />
      </div>

      <div className="detail">
        <h1>{itemDetail.title}</h1>
        <h2>{itemDetail.description}</h2>
        <p style={{color:'brown'}}>Price: {itemDetail.price}</p>
        <div className="icon">
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black"/>
        <button className="addtocart-btn" onClick={()=>handleAddToCart(itemDetail.title,itemDetail.price,itemDetail.id)}>Add to Cart</button>
        </div>
      </div>

    </div>
    </div>
  );
}

export default ProductDetail;

