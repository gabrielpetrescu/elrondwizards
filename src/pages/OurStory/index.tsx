import * as React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import About from "../../components/About";

// prettier-ignore
const OurStory = () => {
    return (
        <div className="our-story-page">
            <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-top.png)" }}>
                <h1>Our Story</h1>
                <p>TEXT HERE</p>
            </div>
            <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-top.png)" }}>
                <Banner />
            </div>
            <div className="wrapper-top-bg" style={{ backgroundImage: "url(/Homepage-bg-bottom.png)" }}>
                <About />
                <Footer />
            </div>
        </div>
    );
};
export default OurStory;
