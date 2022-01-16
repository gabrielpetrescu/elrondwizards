import React, { useState } from "react";
import * as Dapp from "@elrondnetwork/dapp";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar as BsNavbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { dAppName } from "config";
import { ReactComponent as ElrondLogo } from "./../../../assets/img/elrond.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
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
            {/* <img src={logo} alt="" /> */}
            <div>
              <h1>elrond</h1>
              <h1 className="textSpace">wizards</h1>
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
                  onClick={() =>
                    window.open(
                      "https://discord.com/channels/916259416641261579/916264363382435861",
                    )
                  }
                />
              </span>
            </div>
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
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
    // <BsNavbar className="border-bottom px-4 py-3 " style={{ zIndex: 1 }}>
    //   <div className="container-fluid">
    //     <Link
    //       className="d-flex align-items-center navbar-brand mr-0"
    //       to={loggedIn ? "/dashboard" : "/"}
    //     >
    //       {/* <ElrondLogo className="elrond-logo" /> */}
    //       <span className="dapp-name text-muted">{dAppName}</span>
    //     </Link>

    //     <Nav className="ml-auto">
    //       {loggedIn && (
    //         <NavItem>
    //           <a href="/" onClick={logOut}>
    //             Close
    //           </a>
    //         </NavItem>
    //       )}
    //     </Nav>
    //   </div>
    // </BsNavbar>
  );
};

export default Navbar;
