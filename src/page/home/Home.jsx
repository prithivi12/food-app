import React, { useState } from "react";
import "./home.css";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExpoloreMenu/ExploreMenu";
import FoodDisplay from "../../component/fooddisplay/FoodDisplay";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
