// prettier-ignore
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
// prettier-ignore
function Video(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
  <>
      {/* prettier-ignore */}
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
                <a className="magician-wrapper" onClick={handleShow}>
                    <img className="img-fluid" alt="magician" src="/magician.png" />
                    <img className="img-fluid play-btn-bg" alt="magician" src="/play-background.png" />
                    <img className="img-fluid play-btn" alt="magician" src="/play_button.png" />
                </a>
                <Modal show={show} size="lg" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>

                    <Modal.Body>
                        <div className='embed-container'>
                            <iframe src='https://www.youtube.com/embed/zpOULjyy-n8?rel=0' frameBorder='0'
                                    allowFullScreen></iframe>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        </div>
    </div>
  </>
  );
}

export default Video;
