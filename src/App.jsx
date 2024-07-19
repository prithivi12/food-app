import React, { useState } from "react";
import NavBar from "./component/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Cart from "./page/cart/Cart";
import PlaceOrder from "./page/placeOrder/PlaceOrder";
import Footer from "./component/Footer/Footer";
import LoginPopup from "./component/loginPopup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
