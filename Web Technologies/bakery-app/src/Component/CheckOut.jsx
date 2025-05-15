import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CheckOut(props) {
  const { setCheckout, itemsInCart } = props;
  const [inputName, setInputName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputNum, setInputNum] = useState(null);
  const [inputInstruction, setInputInstruction] = useState("");
  const [formVisibility, setFormVisibility] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setFormVisibility(true);
  };

  return (
    <div className="checkout">
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="2x"
        className="lefticon"
        onClick={() => setCheckout(false)}
      />
      <h1>FILL THE FORM</h1>
      <form className="checkout-form" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setInputName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setInputAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          onChange={(e) => setInputNum(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Delivery Instructions(Optional)"
          onChange={(e) => setInputInstruction(e.target.value)}
        />
        <button type="submit" className="btn">
          Place Order
        </button>
      </form>

      {formVisibility && (
        <div className="displayForm">
          <div className="input-text">
            <h4>Your Details:</h4>
            <p>Name: {inputName}</p>
            <p>Address: {inputAddress}</p>
            <p>Contact: {inputNum}</p>
            <p>{inputInstruction}</p>
            <br />
            <h4>Your Order:</h4>
            {itemsInCart.map((item, index) => (
              <div key={index}>
                <p>
                  {item.title} ---- {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
