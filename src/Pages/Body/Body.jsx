import React, { useContext } from "react";
import "./Body.css";
import { StateContext } from "../../context/Context";
import { Tasks } from "../../Tasks";

function Body() {
  const { lesson } = useContext(StateContext);

  const tasks = Tasks.filter((item) => `${item.title} ${item.id}` === lesson);
  // console.log(tasks);
  // console.log(lesson);
  return (
    <div className="body">
      {tasks.map((item, index) => (
        <div key={index}>
          <h1>
            {item.title} <span>{item.id}</span>
          </h1>
          <p>{item.text}</p>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Body;
