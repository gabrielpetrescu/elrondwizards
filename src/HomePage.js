import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <Banner />
      <About />
    </div>
  );
}

export default HomePage;
