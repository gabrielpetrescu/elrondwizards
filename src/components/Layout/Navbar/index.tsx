import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
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
                <a className="menu-item" href="/#swiper-collection">Collections</a>
                <a className="menu-item" href="/#team-link">About Us</a>
                <a className="menu-item" href="/#roadmap-link">Roadmap</a>
                <a className="menu-item" href="/#blog-link">Blog</a>
                <a className="menu-item" href="/#contactanchor">Contact</a>
                <a className="menu-item" href="/#">Whitepaper</a>
              </Menu>


              <div className="collapse navbar-collapse d-none d-md-block" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li><a href="/#swiper-collection" className="nav-link">Collections</a></li>
                  <li><a href="/#team-link" className="nav-link">About Us</a></li>
                  <li><a href="/#roadmap-link" className="nav-link">Roadmap</a></li>
                  <li><a href="/#blog-link" className="nav-link">Blog</a></li>
                  <li><a href="/#contactanchor" className="nav-link">Contact</a></li>
                  <li><a href="/#" className="nav-link">Whitepaper</a></li>
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
