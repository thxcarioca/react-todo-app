import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task 
          task={task} 
          handleTaskClick={handleTaskClick} 
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
