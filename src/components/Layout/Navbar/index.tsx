import React, { useState } from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as $ from "jquery";
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
      {/* prettier-ignore */}
      <div>
        <div className="menu-bg" style={{ backgroundImage: "url(/menu-bg.png)" }}>
          <div className="container menu-container">
            <nav className="navbar navbar-expand-sm p-0">
              <Link className="navbar-brand p-0 m-0" to="/">
                <img className="img-fluid" src="/rectangle-logo.png" />
              </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li><Link to="#" className="nav-link">Collections</Link></li>
                  <li><Link to="#" className="nav-link">About Us</Link></li>
                  <li><Link to="#" className="nav-link">Roadmap</Link></li>
                  <li><Link to="#" className="nav-link">Blog</Link></li>
                  <li><Link to="#" className="nav-link">Contact</Link></li>
                  <li><Link to="#" className="nav-link">Whitepaper</Link></li>
                  <li>{loggedIn ? (
                      <Link className="nav-link" to="/" onClick={logOut}>
                        Logout
                      </Link>
                      ) : (
                      <Link className="nav-link" to="/dashboard">
                        Wallet
                      </Link>
                      )}
                  </li>
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
