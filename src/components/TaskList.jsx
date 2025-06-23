import {useEffect, useState} from 'react'

const TaskList = () => {

  const [tasks, setTasks] = useState([])
  //Utilizamos el metodo fill para rellenar los datos con un valor especifico (bool)
  const [isChecked, setIsChecked] = useState(
    new Array(tasks.length)
  )
  const [task, setTask] = useState({
    id: Date.now(),
    description: "",
    isCompleted: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      //Valida que no este vacío el input
      if(task.description === "") return;
      //Se agrega la tarea al formulario
      setTasks(prevTask => {
        return [...prevTask, task]
      })
      //Agregada la tarea se limpia el formulario
      setTask({
        id: Date.now(),
        description: "",
        isCompleted: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  const isCompletedTask = (tTask) => {
    try {
      setTasks(prev =>
        prev.map(task =>
          task.id === tTask.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        )
      );
    } catch (error) {
      console.log(error)
    }
  }

  const completeTask = tasks.filter((t) => t.isCompleted == true).length

  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/3 bg-gray-800 border-2 mb-4 border-gray-700 text-white rounded-lg p-3">
        <h1 className="text-center text-2xl font-bold mt-2 text-blue-400">
          Tareas
        </h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="flex mx-3 justify-between space-x-2 mt-6 mb-4">
              <input
                className="bg-gray-700 p-2 w-full rounded-md"
                placeholder="Agrega una nueva tarea"
                value={task.description}
                onChange={(e) => setTask({
                  id: Date.now(),
                  description: e.target.value,
                  isCompleted: false
                })}
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
                {tasks.map((newTask, index) => (
                  <div key={index} className="mx-3 py-1 flex items-center space-x-3">
                    <label className="flex items-center cursor-pointer relative">
                      <input 
                        id="check" 
                        type="checkbox"
                        checked={isChecked[index]}
                        onChange={() => isCompletedTask(newTask)}
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-200 checked:bg-slate-800 checked:border-slate-200" 
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    <p className={newTask.isCompleted ? `text-gray-400 line-through` :`text-gray-100` }>{newTask.description}</p>
                    <button 
                      className="hover:bg-gray-700 p-1 rounded-lg"
                      onClick={() => console.log("Eliminando")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                ))}
                <div className="m-3">
                  <p className="text-gray-500">
                    {completeTask} de {tasks.length} tareas completadas
                  </p>
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