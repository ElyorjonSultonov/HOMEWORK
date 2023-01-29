import React, { useContext } from "react";
import "./Nav.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { StateContext } from "../../context/Context";

function Nav() {
  const { val, setVal } = useContext(StateContext);

  const handleChange = (event) => {
    setVal(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">FRONTEND</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={val}
          onChange={handleChange}
          //   label="Age"
        >
          <MenuItem value={"HTML"}>HTML</MenuItem>
          <MenuItem value={"CSS"}>CSS</MenuItem>
          <MenuItem value={"BOOTSTRAP"}>BOOTSTRAP</MenuItem>
          <MenuItem value={"JQUERY"}>JQUERY</MenuItem>
          <MenuItem value={"JAVASCRIPT"}>JAVASCRIPT</MenuItem>
          <MenuItem value={"REACT.JS"}>REACT.JS</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default Nav;
