import React from "react";
import NavBar from "./component/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Cart from "./page/cart/Cart";
import PlaceOrder from "./page/placeOrder/PlaceOrder";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
