import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { LOGO } from "../../assets/svg/svg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { StateContext } from "../../context/Context";
// import Nav from "../Nav/Nav";
function Navbar() {
  const { val, setVal } = useContext(StateContext);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="logo">
            <span>{LOGO}</span>
          </div>
          {/* ----------------- */}
          <div className="menu">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                FRONTEND
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={val}
                onChange={handleChange}
              >
                <MenuItem value={"HTML"}>HTML</MenuItem>
                <MenuItem value={"CSS"}>CSS</MenuItem>
                <MenuItem value={"BOOTSTRAP"}>BOOTSTRAP</MenuItem>
                <MenuItem value={"JQUERY"}>JQUERY</MenuItem>
                <MenuItem value={"JAVASCRIPT"}>JAVASCRIPT</MenuItem>
                <MenuItem value={"REACT"}>REACT</MenuItem>
              </Select>
            </FormControl>
            {/* backend --------------------------------- */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                BACKEND
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={val}
                onChange={handleChange}
              >
                <MenuItem value={"data-science"}>data-science</MenuItem>
                <MenuItem value={"flask"}>flask</MenuItem>
                <MenuItem value={"data-analysis"}>data-analysis</MenuItem>
                <MenuItem value={"deep-learning"}>deep-learning</MenuItem>
                <MenuItem value={"web-scraping"}>web-scraping</MenuItem>
                <MenuItem value={"django"}>django</MenuItem>
                <MenuItem value={"web-development"}>web-development</MenuItem>
                <MenuItem value={"JAVASCRIPT"}>JAVASCRIPT</MenuItem>
              </Select>
            </FormControl>
            {/* frontend --------------------------------- */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                MOBILE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={val}
                onChange={handleChange}
              >
                <MenuItem value={"DORT"}>DORT</MenuItem>
                <MenuItem value={"FLUTTER"}>FLUTTER</MenuItem>
              </Select>
            </FormControl>
            {/* <Nav/> */}
          </div>

          {/* ----------------- */}
          <div className="btn">
            <button>login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
