import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
// prettier-ignore
const Footer = () => {
  return (
    <div>
      <div className="footer">
          <div className="top-footer">
              <h4>Trusted partners</h4>
              <img src="/partners.svg" alt="partners" className="img-fluid partners-logo"/>
              <h4>Get in touch with us</h4>
              <div className="social-links">
                  <a href="#">
                      <img src="/twitter.svg" alt="twitter" className="img-fluid"/>
                  </a>
                  <a href="#">
                      <img src="/Discord.svg" alt="discord" className="img-fluid"/>
                  </a>
                  <a href="#">
                      <img src="/Instagram.svg" alt="instagram" className="img-fluid"/>
                  </a>
                  <a href="#">
                      <img src="/GitHub.svg" alt="github" className="img-fluid"/>
                  </a>
                  <a href="#">
                      <img src="/facebook.svg" alt="facebook" className="img-fluid"/>
                  </a>
              </div>

              <a className="mail-link" href="mailto:team@elrondwizards.com">
                  Or email us at team@elrondwizards.com
              </a>
          </div>
          <div className="bottom-footer" style={{ backgroundImage: "url(/footer-bg.png)" }}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
                          <a href="#">
                              <img className="img-fluid" src="/elrond-wizards-logo.svg" />
                          </a>
                      </div>
                      <div className="col-lg-8  bottom-links">
                          <div className="bottom-bar">
                              <p>© 2022, Elrond Wizards</p>
                              <a href="#">
                                  Cookie Policy
                              </a>
                              <a href="#">
                                  Terms and Conditions
                              </a>
                              <a href="#">
                                  Privacy Policy
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </div>
    </div>
  );
};

export default Footer;
