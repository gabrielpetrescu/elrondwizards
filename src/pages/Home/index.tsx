import * as React from "react";
import { Link } from "react-router-dom";
import { dAppName } from "config";
import { routeNames } from "routes";
import Banner from "components/Banner";
import Video from "components/Video";
import About from "components/About";
import RoadMap from "components/RoadMap";
import UseOfFounds from "components/UseOfFounds";
import Footer from "components/Footer";
import OurCollection from "components/OurCollection";
// prettier-ignore
const Home = () => {
  return (
    <div className="home-page">
        <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-top.png)" }}>
            <Video />
            <Banner />
        </div>
        <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-bottom.png)" }}>
            <OurCollection />
            <About />
            <RoadMap />
            <UseOfFounds />
            <Footer />
        </div>
    </div>
  );
};
export default Home;
