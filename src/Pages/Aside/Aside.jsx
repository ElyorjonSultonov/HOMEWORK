import React, { useState, useContext } from "react";
import "./Aside.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StateContext } from "../../context/Context";
import { Tasks } from "../../Tasks";

function Aside() {
  const { setLesson, val } = useContext(StateContext);
  const TasksFilter = Tasks.filter((item) => item.title === val);

  // console.log(TasksFilter, "taskfilter");
  // console.log(Tasks, "allTasks");
  // const [text, setText] = useState(); 
  const handleText = (e) => {
    // console.log(e.target.innerText);
    setLesson(e.target.innerText);
  };
  return (
    <aside>
      {TasksFilter.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={(e) => handleText(e)}
          >
            <Typography value={TasksFilter}>
              {item.title} {item.id}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.category}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </aside>
  );
}

export default Aside;

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
// });

// export default function ActionsInAccordionSummary() {
//   // const classes = useStyles();
// }
