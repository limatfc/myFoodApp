import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";

const App = (props) => {
  const [showCart, setshowCart] = useState(false);

  const openCartHandler = (click) => {
    setshowCart(true);
  };

  const closeCartHandler = () => {
    setshowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <Meals />
      <Footer />
    </CartProvider>
  );
};

export default App;
