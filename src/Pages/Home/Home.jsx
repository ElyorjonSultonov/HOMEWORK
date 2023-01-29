import React, { useContext } from "react";
import "./Home.css";
import Aside from "../Aside/Aside";

import Body from "../Body/Body";

function Home() {
  return (
    <div className="homepage">
      <div>
        <Aside />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default Home;
