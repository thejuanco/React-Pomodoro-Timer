import React from 'react'

const TaskList = () => {
  return (
    <>
      <div className="w-full md:w-1/2 bg-gray-800 text-white rounded-md p-2">
        <h1 className="text-center text-2xl font-bold text-blue-400">Tareas</h1>
        <div className="flex flex-col items-center space-y-4"></div>
      </div>
    </>
  );
}

export default TaskList