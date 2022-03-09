import React from "react";
// prettier-ignore
const Footer = () => {
  return (
    <div>
      <div className="footer" id="contact-link">
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
                      <img src="/telegram.svg" alt="telegram" className="img-fluid"/>
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
                              <a href="/cookie-policy">
                                  Cookie Policy
                              </a>
                              <a href="/terms-and-conditions">
                                  Terms and Conditions
                              </a>
                              <a href="/privacy-policy">
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
