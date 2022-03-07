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
import Buy from "../Dashboard/Buy";
import NFT from "../NFT";
import Explore from "../Explore";
import FirstSlider from "../../components/FirstSlider";
import SecondSlider from "../../components/SecondSlider";
import RecentPosts from "../../components/RecentPosts";
// prettier-ignore
const Home = () => {

    const [activeTab, setActiveTab] = React.useState({
        tab1: true,
        tab2: false,
    });

    const handleTabSwitch = (e: any) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        if (value.includes("Collection 1"))
            setActiveTab({
                tab1: true,
                tab2: false,

            });
        if (value.includes("Collection 2"))
            setActiveTab({
                tab1: false,
                tab2: true,

            });
    };



    return (
    <div className="home-page">
        <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-top.png)" }}>
            <Video />


            <div className="swiper-section container text-center">
                <div id="tsum-tabs">


                    <div
                        className={`nav-nft nft-tab ${activeTab.tab1 ? "tab-active" : ""}`}
                        onClick={handleTabSwitch}
                    >
                        <span>Collection 1</span>
                    </div>
                    <div
                        className={`nav-explore nft-tab ${activeTab.tab2 ? "tab-active" : ""}`}
                        onClick={handleTabSwitch}
                    >
                        <span>Collection 2</span>
                    </div>
                </div>


                    {(() => {
                        if (activeTab.tab1) return <FirstSlider />;
                        if (activeTab.tab2) return <SecondSlider />;
                    })()}
            </div>
            <OurCollection />

        </div>
        <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-bottom.png)" }}>

            <About />
            <RoadMap />
            <RecentPosts />
            <Footer />
        </div>
    </div>
  );
};
export default Home;
