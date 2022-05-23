import React, { useState } from "react";
import { val } from "../data/data";
import { AddTask } from "./AddTask";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  let [info,setinfo]=useState("")
  // NOTE: do not delete `data-cy` key value pair
  const data=(val)=>{
    setinfo(val)
   
  }
  console.log(val)
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader length={val().length}/>
      {/* Add Task */}
      <AddTask info={data}/>
      {/* Tasks */}
      <Tasks info={info}/>
    </div>
  );
};

export default TaskApp;
