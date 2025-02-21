import { useState } from 'react'

import PomodoroTimer from './components/PomodoroTimer';
import TaskList from './components/TaskList';

function App() {

  return (
    <>
      <div>
        <h2 className="mx-auto mt-24 mb-10 font-bold text-4xl text-gray-300 text-center">
          Reloj pomodoro
        </h2>
        <div className='flex justify-center items-center mx-20 gap-8'>
          <PomodoroTimer/>
          <TaskList/>
        </div>
      </div>
    </>
  );
}

export default App
