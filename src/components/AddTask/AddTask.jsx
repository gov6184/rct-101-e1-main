import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({info}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  let [val,setval]=useState("")
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"  value={val} onChange={(e)=>{setval(e.target.value)}}/>
      <button data-cy="add-task-button" onClick={()=>{info(val);setval("")}} >+</button>
    </div>
  );
};

export default AddTask;
