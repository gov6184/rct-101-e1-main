import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({name,done}) => {
  // NOTE: do not delete `data-cy` key value pair
 
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={done} />
      <div data-cy="task-text">{name}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;
