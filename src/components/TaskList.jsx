import {useState} from 'react'

const TaskList = () => {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      //Valida que no este vacío el input
      if(task === "") return;
      //Se agrega la tarea al formulario
      setTasks(prevTask => {
        return [...prevTask, task]
      })
      //Agregada la tarea se limpia el formulario
      setTask("")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg p-3">
        <h1 className="text-center text-2xl font-bold mt-2 text-blue-400">
          Tareas
        </h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="flex mx-3 justify-between space-x-2 mt-6 mb-2">
              <input
                className="bg-gray-700 p-2 w-full rounded-md"
                placeholder="Agrega una nueva tarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                name="task"
              />
              <button className="text-2xl py-1 px-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </form>
          <div>
            {tasks.length > 0 ? (
              <>
                {tasks.map((newTask) => (
                  <div className="mx-3 flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 text-gray-600 bg-gray-800 border-gray-900 rounded focus:ring-blue-900"/>
                    <p className="text-gray-100">{newTask}</p>
                    <button 
                      className="hover:bg-gray-700 p-1 rounded-lg"
                      onClick={() => console.log()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                ))}
                <div className="m-3">
                  <p className="text-gray-500">0 de 0 tareas completadas</p>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center m-12">
                <p className="text-gray-500">No hay tareas disponibles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList