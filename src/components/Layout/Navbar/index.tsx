import React, { useState } from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as $ from "jquery";
import { SidebarData } from "./SidebarData";
import { slide as Menu } from "react-burger-menu";

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
      {/* prettier-ignore */}
      <div>


        <div className="menu-bg" style={{ backgroundImage: "url(/menu-bg.png)" }}>
          <div className="container menu-container">
            <nav className="navbar navbar-expand-md p-0">
              <Link className="navbar-brand p-0 m-0" to="/">
                <img className="img-fluid" src="/elrond-wizards-logo.svg" />
              </Link>

              <Menu right>
                <a className="menu-item" href="#swiper-collection">Collections</a>
                <a className="menu-item" href="#team-link">About Us</a>
                <a className="menu-item" href="#roadmap-link">Roadmap</a>
                <a className="menu-item" href="#blog-link">Blog</a>
                <a className="menu-item" href="#contact-link">Contact</a>
                <a className="menu-item" href="/#">Whitepaper</a>
              </Menu>


              <div className="collapse navbar-collapse d-none d-md-block" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li><Link to="#swiper-collection" className="nav-link">Collections</Link></li>
                  <li><Link to="#team-link" className="nav-link">About Us</Link></li>
                  <li><Link to="#roadmap-link" className="nav-link">Roadmap</Link></li>
                  <li><Link to="#blog-link" className="nav-link">Blog</Link></li>
                  <li><Link to="#contact-link" className="nav-link">Contact</Link></li>
                  <li><Link to="/#" className="nav-link">Whitepaper</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
