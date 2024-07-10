import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contain">
        <h2>Order your favourite food here</h2>
        <p>
          A food delivery app revolutionizes the way people access their
          favorite meals, bringing culinary delights from local restaurants
          directly to their doorsteps with just a few taps on their smartphones.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
