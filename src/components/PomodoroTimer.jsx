import { useState, useEffect } from 'react'

const PomodoroTimer = () => {

  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;
  const LONG_TIME = 15 * 60;
  const TOTAL_CYCLES = 4;

  const [time, setTime] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [cycle, setCycle] = useState(1);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    if(!isActive) return;
    const interval =setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime -1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [isActive])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="w-full md:w-1/3 bg-gray-800 text-white rounded-md p-2">
        <h1 className="text-center text-xl font-bold text-blue-400">Trabajo</h1>
        <div className="flex flex-col items-center space-y-4 p-2">
          <span className="font-bold text-6xl mt-8">{formatTime(time)}</span>
          <p className="text-gray-300">Ciclo: {cycle} / {TOTAL_CYCLES}</p>
          <div className="m-2 flex space-x-4">
            <button 
              className="bg-white text-gray-900 py-2 px-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-gray-100"
              onClick={() => {
                toggleTimer()
              }}
            >
              Iniciar
            </button>
            <button className="bg-white text-gray-900 py-2 px-3 rounded-lg font-semibold hover:bg-gray-200">
              reiniciar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PomodoroTimer