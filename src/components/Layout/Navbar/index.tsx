import React, { useState } from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { SidebarData } from "./SidebarData";

const Navbar = () => {
  const { loggedIn } = Dapp.useContext();
  const dappLogout = Dapp.useLogout();
  const history = useHistory();

  const logOut = (e: React.MouseEvent) => {
    e.preventDefault();
    dappLogout({ callbackUrl: `${window.location.origin}/` });
    history.push("/");
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="logo">
            <div>
              <Link to="/">
                <h2>elrond</h2>
                <h2 className="textSpace">wizards</h2>
              </Link>
            </div>
          </div>
          <div className="socialsMenu">
            <div className="socials">
              <span>
                <FontAwesomeIcon
                  icon={faFacebook}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/people/Elrond-Wizards/100075376672839/",
                    )
                  }
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faGithub}
                  onClick={() =>
                    window.open(
                      "https://github.com/razvansadeanu/elrondwizards/tree/master",
                    )
                  }
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faInstagram}
                  onClick={() =>
                    window.open("https://www.instagram.com/elrondwizards/")
                  }
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faTwitter}
                  onClick={() =>
                    window.open("https://twitter.com/ElrondWizards")
                  }
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faDiscord}
                  onClick={() => window.open("https://discord.gg/FhyTYYKNb2")}
                />
              </span>
            </div>
            {loggedIn ? (
              <Link className="whiteButton" to="/" onClick={logOut}>
                <span>
                  <FontAwesomeIcon icon={faWallet} />
                </span>
                <h3>Logout</h3>
              </Link>
            ) : (
              <Link className="whiteButton" to="/dashboard">
                <span>
                  <FontAwesomeIcon icon={faWallet} />
                </span>
                <h3>Wallet</h3>
              </Link>
            )}

            <div className="menuButton" onClick={showSidebar}>
              <h2>Menu.</h2>
            </div>
          </div>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {/* {item.icon} */}
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li className="nav-text">
            <Link
              to="#"
              onClick={() => {
                window.open(
                  "https://stelrondwizardsweb.blob.core.windows.net/static/Whitepaper.pdf",
                );
              }}
            >
              Whitepaper
            </Link>
          </li>
          <li className="nav-text">
            <Link to="#">Close</Link>
          </li>
          {loggedIn && (
            <li className="nav-text">
              <Link to="/" onClick={logOut}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
