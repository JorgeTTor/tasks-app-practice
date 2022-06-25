
import './App.css';
import React, { useState } from 'react';
import thingsDoneLogo from './images/thingsDone-logo.png'
import TaskList from './components/TaskList';


function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="tasks-app">
      <div className='thingsdone-logo-container'>
        <img 
        src={thingsDoneLogo} 
        className='thingsdone-logo' />
      </div>
      <div className='tasks-list-main'>
        <div className=''>
        <h1>My Tasks</h1>
       
        <TaskList />
        </div>
      </div>

    </div>
  );
}

export default App;
