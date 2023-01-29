import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { StateContext } from "./context/Context";
import Home from "./Pages/Home/Home";
import { Tasks } from "./Tasks";

function App() {
  const [data, setData] = useState(Tasks);
  const [val, setVal] = useState("HTML");
  const [lesson, setLesson] = useState();
  // console.log(data);
  useEffect(() => {
    localStorage.setItem("setData", JSON.stringify(data));
  }, [data]);
  // console.log(data);
  return (
    <div className="App">
      <StateContext.Provider
        value={{
          data,
          setData,
          val,
          setVal,
          lesson,
          setLesson,
        }}
      >
        <Navbar />
        <Home />
      </StateContext.Provider>
    </div>
  );
}

export default App;
