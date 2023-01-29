import React from "react";
import "./Header.css";
import Bg1 from "../../assets/imgs/showcase.png";

function Header() {
  return (
    <header>
      <div className="row">
        <img src={Bg1} alt="" />
      </div>
    </header>
  );
}

export default Header;
