import React, { useState } from "react";
import "./home.css";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExpoloreMenu/ExploreMenu";
import FoodDisplay from "../../component/fooddisplay/FoodDisplay";
import AppDownload from "../../component/AppDownload/AppDownload";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
