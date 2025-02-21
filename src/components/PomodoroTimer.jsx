import React, {useState} from 'react'

const PomodoroTimer = () => {

  const [timer, setTimer] = useState(0)
  const [start, setStart] = useState(false)

  return (
    <>
      <div className="w-full md:w-1/2 bg-gray-800 text-white rounded-md p-2">
        <h1 className="text-center text-2xl font-bold text-blue-400">Trabajo</h1>
        <div className="flex flex-col items-center space-y-4">
          
        </div>
      </div>
    </>
  )
}

export default PomodoroTimer