import React, { useState } from "react";
import TaskForm from "./TasksForm";
import Task from './Tasks'
import '../stylesheet/TaskList.css';

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task)
    
    if(task.text.trim()) {
      task.text= task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    };
    // console.log('Task Added');
    // console.log(task);
    }
    const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

   const completeTask = id => {
     const updatedTasks = tasks.map(task => {
       if (task.id === id){
         task.completed = !task.completed;
       }
       return task;
     });

     setTasks(updatedTasks);
   };

  return (
    <>
    < TaskForm onSubmit={addTask} />
    <div className="tasks-list-container">
      LISTA DE TAREAS
      {
        tasks.map((task) =>
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed = { task.completed }
            completeTask = { completeTask }
            deleteTask = { deleteTask }
        
          />
        )
      }
    </div>
    </>

  )
}

export default TaskList;