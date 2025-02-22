import { useState, useEffect } from 'react'

const PomodoroTimer = () => {

  const WORK_TIME = 2 * 2;
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
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if(time === 0){
      if(isWork){
        if(cycle < TOTAL_CYCLES){
          setTime(BREAK_TIME);
          setCycle((newCycle) => newCycle + 1);
        } else if(cycle == TOTAL_CYCLES){
          setTime(LONG_TIME)
          setCycle(1)
        }
      } else {
        setTime(WORK_TIME)
      }
      setIsWork(prevIsWork => !prevIsWork)
    }

    return () => interval ? clearInterval(interval) : null
  }, [isActive, time, isWork, cycle])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(WORK_TIME)
    setIsWork(true)
  }

  return (
    <>
      <div className="w-full md:w-1/3 bg-gray-800 text-white rounded-lg p-3">
        <h1 className="text-center text-xl font-bold mt-2 text-blue-400">{isWork ? "Trabajo" : "Descanso"}</h1>
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
              {isActive ? "Pausar" : "Iniciar"}
            </button>
            <button className="bg-white text-gray-900 py-2 px-3 rounded-lg font-semibold hover:bg-gray-200"
              onClick={() => resetTimer()}
            >
              reiniciar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PomodoroTimer