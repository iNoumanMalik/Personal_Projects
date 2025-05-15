import "./App.css";
import Homepage from "./Component/Homepage";
import ProductDetail from "./Component/ProductDetail";
import Cart from "./Component/Cart";
import CheckOut from "./Component/CheckOut";
import { useState } from "react";

function App() {
  const [itemDetail, setItemDetail] = useState(null);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  return (
    <div className="app">
      {checkout ? (
        <CheckOut setCheckout={setCheckout} itemsInCart={itemsInCart}/>
      ) : cartDisplay ? (
        <Cart
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          itemsInCart={itemsInCart}
          setCartDisplay={setCartDisplay}
          setCheckout={setCheckout}
        />
      ) : itemDetail ? (
        <ProductDetail
          itemDetail={itemDetail}
          setItemDetail={setItemDetail}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          setCartDisplay={setCartDisplay}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
        />
      ) : (
        <Homepage
          itemDetail={itemDetail}
          setItemDetail={setItemDetail}
          setCartDisplay={setCartDisplay}
        />
      )}
    </div>
  );
}

export default App;
