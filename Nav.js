import React from "react";
import Account from "./Account";
import Logo from "../assests/image/logo-bg.png";
import Classes from "../Styles/Layout.module.css";

function Nav() {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={Classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;
