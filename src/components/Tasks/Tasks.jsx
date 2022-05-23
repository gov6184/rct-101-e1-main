import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./tasks.module.css";
import { val } from "../../data/data";
import Task from "../Task/Task";
const Tasks = ({info}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [data,setdata]=useState([]);
  let [cheacked,change]=useState(true)
  useEffect(()=>{
    let count=0
    console.log(info)
    data.map((elem)=>{
      if(elem.text==info)
      {
        count++
        // change(false)
      }
    })
    console.log(cheacked,count)
    if(info!="" && count==0 )
    {
      setdata([{
        id:Math.random(),
        text:info,
        count:1,
        done:false
      },...data])
    }
    // change(true)
    
  },[info])
  // console.log(data)
  useEffect(()=>{
    
    console.log(data)
    return(
      setdata(val())
    )
  },[])
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {
          data.map((elem)=>{
            return(
              <Task name={elem.text} length={data.length} done={elem.done}/>
            );
          })
        }
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
