import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
  const { cartTotal, setCartTotal, itemsInCart, setCartDisplay, setCheckout } = props;

  const [itemQuantities, setItemQuantities] = useState(
    itemsInCart.map(() => 1)
  );

  const handleAddItem = (index, itemPrice) => {
    const newQuantities = [...itemQuantities];
    newQuantities[index] += 1;
    setItemQuantities(newQuantities);
    setCartTotal(cartTotal + itemPrice);
  };

  const handleRemoveItem = (index, itemPrice) => {
    if (itemQuantities[index] > 1) {
      const newQuantities = [...itemQuantities];
      newQuantities[index] -= 1;
      setItemQuantities(newQuantities);
      setCartTotal(cartTotal - itemPrice);
    }
  };

  return (
    <div className="cart">
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="2x"
        className="cart-lefticon"
        onClick={() => setCartDisplay(false)}
      />
      <h1>Your Cart</h1>

      <div className="card">
        {itemsInCart.map((item, index) => (
          <div key={index} className="carditem">
            <div className="li">
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="icons"
                  onClick={() => handleAddItem(index, item.price)}
                />
                <span
                  style={{
                    border: "1px solid gray",
                    paddingInline: "20px",
                    marginInline: "10px",
                  }}
                >
                  {itemQuantities[index]}
                </span>
                <FontAwesomeIcon
                  icon={faMinus}
                  className="icons"
                  onClick={() => handleRemoveItem(index, item.price)}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3>Your Bill: {cartTotal}</h3>
      <div className="checkout-btn">
        <FontAwesomeIcon icon={faCreditCard} size="2x"/>
        <button className="btn" onClick={()=>setCheckout(true)}>Check Out</button>
      </div>
    </div>
  );
}

export default Cart;
