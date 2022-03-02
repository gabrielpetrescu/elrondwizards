import React from "react";
// prettier-ignore
const Video = () => {
  return (
  <>
    <div className="head container">
        <div className="row">
            <div className="col-md-7 d-flex align-items-center order-2 order-md-1">
                <div>
                    <h1>Are you ready for our magic</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique suspendisse et, nisi, sollicitudin dui, elementum amet. Morbi consectetur neque non purus ipsum in aliquam. Massa at sit a massa non facilisi nisi, elementum lobortis. Quam curabitur ipsum bibendum diam pellentesque.</p>
                    <a href="#" className="btn-main">
                        Mint here
                        <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                    </a>
                </div>
            </div>
            <div className="col-md-5 text-center text-lg-left order-1 order-md-2">
                <a href="#" className="magician-wrapper">
                    <img className="img-fluid" alt="magician" src="/magician.png" />
                    <img className="img-fluid play-btn-bg" alt="magician" src="/play-background.png" />
                    <img className="img-fluid play-btn" alt="magician" src="/play_button.png" />
                </a>
            </div>
        </div>
    </div>
  </>
  );
};

export default Video;
