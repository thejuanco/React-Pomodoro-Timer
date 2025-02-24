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
        <h1 className="text-center text-xl font-bold mt-2 text-blue-400">
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
                <span className="material-symbols-rounded">add</span>
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
                      <span className="material-symbols-rounded">delete</span>
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