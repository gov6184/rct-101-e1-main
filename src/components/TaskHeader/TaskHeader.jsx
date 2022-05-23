import React, { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({length}) => {
  // sample values to be replaced
  let [totalTask,totc] = useState(0);
  let [unCompletedTask,unc] = useState(0);
  

  // NOTE: do not delete `data-cy` key value pair
  const change=(a,b)=>{
    unCompletedTask(a)
    totc(b)
  }
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h2>Todo List</h2>
      <b data-cy="header-remaining-task">You have {unCompletedTask}</b>
      <b data-cy="header-total-task">of {length} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
