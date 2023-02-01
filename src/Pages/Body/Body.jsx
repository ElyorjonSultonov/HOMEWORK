import React, { useContext, useRef } from "react";
import "./Body.css";
import { StateContext } from "../../context/Context";
import { Tasks } from "../../Tasks";
import { Pause } from "@mui/icons-material";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import Register from "../../Components/Register/Register";
// import Login from "../../Components/Login/Login";

function Body() {
  const playing = useRef();
  const playBtn = () => {
    playing.current.play();
  };
  const pauseBtn = () => {
    playing.current.pause();
  };
  const { lesson } = useContext(StateContext);

  const tasks = Tasks.filter((item) => `${item.title} ${item.id}` === lesson);
  // console.log(tasks);
  // console.log(lesson);
  console.log(tasks);
  return (
    <div className="body">
      {tasks.map((item, index) => (
        <div key={index}>
          <h1>
            {item.title} <span>{item.id}</span>
          </h1>
          <p>{item.text}</p>
          {item.image &&
            item.image.length > 0 &&
            item.image?.map((rasm, index) => (
              <img key={index} src={rasm} alt="imgs" />
            ))}

          <video ref={playing} src={item.video}></video>
          <AiFillPlayCircle onClick={playBtn} className="playBtn" />
          <AiFillPauseCircle onClick={pauseBtn} className="pauseBtn" />
        </div>
      ))}
      <Register />
      {/* <Login/> */}
    </div>
  );
}

export default Body;
