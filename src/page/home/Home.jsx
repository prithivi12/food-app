import React, { useState } from "react";
import "./home.css";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExpoloreMenu/ExploreMenu";

function Home() {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
}

export default Home;
