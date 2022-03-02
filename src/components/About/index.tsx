import React from "react";
import ReadMore from "./ReadMore";
// prettier-ignore
const About = () => {

  return (
    <div>
      <div className="wrapper-team container">
        <h2>Our team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique suspendisse et, nisi, sollicitudin dui, elementum amet. Morbi consectetur neque non purus ipsum in aliquam. Massa at sit a massa non facilisi nisi, elementum lobortis. Quam curabitur ipsum bibendum diam pellentesque.</p>


        <div className="wrapper-cards-team">
            <div className="row">
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Team_img-1.png" alt="Team Person"/>
                        <p className="name-person">
                            Flavius E.
                        </p>
                        <p className="function-person">
                            Co-Founder, CSO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-8 text-left">
                                <a href="#">
                                    <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                </a>
                                <a href="#">
                                    <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-4 text-right">
                                <a href="#">
                                    <img src="/arrow-purple.svg" alt="arrow" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Team_img-2.png" alt="Team Person"/>
                        <p className="name-person">
                            Flavius E.
                        </p>
                        <p className="function-person">
                            Co-Founder, CSO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-8 text-left">
                                <a href="#">
                                    <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                </a>
                                <a href="#">
                                    <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-4 text-right">
                                <a href="#">
                                    <img src="/arrow-purple.svg" alt="arrow" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Team_img-3.png" alt="Team Person"/>
                        <p className="name-person">
                            Flavius E.
                        </p>
                        <p className="function-person">
                            Co-Founder, CSO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-8 text-left">
                                <a href="#">
                                    <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                </a>
                                <a href="#">
                                    <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-4 text-right">
                                <a href="#">
                                    <img src="/arrow-purple.svg" alt="arrow" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="wrapper-card">
                        <img className="img-fluid person-avatar" src="/Team_img-4.png" alt="Team Person"/>
                        <p className="name-person">
                            Flavius E.
                        </p>
                        <p className="function-person">
                            Co-Founder, CSO
                        </p>
                        <div className="row social-icons-person">
                            <div className="col-8 text-left">
                                <a href="#">
                                    <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                </a>
                                <a href="#">
                                    <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-4 text-right">
                                <a href="#">
                                    <img src="/arrow-purple.svg" alt="arrow" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center">
                <a href="#" className="btn-main">
                    See our story
                    <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
