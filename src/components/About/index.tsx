import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
// prettier-ignore

const About = () => {

    const [style, setStyle] = useState("clasa1");


    const changeStyle = () => {

        setStyle("clasa2");

        if(style == "clasa2"){
            setStyle("clasa1");
        }

    };
  
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
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="0" className={style}>
                                        <Accordion.Body>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle}>
                                            <a href="#">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a href="#">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

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
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="1" className={style}>
                                        <Accordion.Body>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle}>
                                            <a href="#">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a href="#">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

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
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="2" className={style}>
                                        <Accordion.Body>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle}>
                                            <a href="#">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a href="#">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

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
                            <div className="col-12 text-left">

                                <Accordion>
                                    <Accordion.Item eventKey="3" className={style}>
                                        <Accordion.Body>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation</p>
                                        </Accordion.Body>
                                        <Accordion.Header  onClick={changeStyle}>
                                            <a href="#">
                                                <img src="/twitter-icon.svg" alt="twitter" className="img-fluid"/>
                                            </a>
                                            <a href="#">
                                                <img src="/linkedin-icon.svg" alt="linkedin" className="img-fluid"/>
                                            </a>

                                            <svg className="arrow-expand" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill="#CA3ADA" d="M33 22.0001L33.7071 21.293L34.4142 22.0001L33.7071 22.7072L33 22.0001ZM11 23.0001C10.4477 23.0001 10 22.5524 10 22.0001C10 21.4478 10.4477 21.0001 11 21.0001V23.0001ZM26.3738 13.9596L33.7071 21.293L32.2929 22.7072L24.9596 15.3739L26.3738 13.9596ZM33.7071 22.7072L26.3738 30.0405L24.9596 28.6263L32.2929 21.293L33.7071 22.7072ZM33 23.0001L11 23.0001V21.0001L33 21.0001V23.0001Z" >

                                                </path>
                                            </svg>

                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>

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
