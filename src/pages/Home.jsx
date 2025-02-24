import TaskList from '../components/TaskList'
import PomodoroTimer from '../components/PomodoroTimer'
import NavHome from '../components/NavHome';

const Home = () => {
  return (
    <>
      <NavHome />
      <div>
        <h2 className="mx-auto mt-28 mb-10 font-bold text-4xl text-gray-300 text-center">
          Reloj pomodoro
        </h2>
        <div className="flex justify-center items-center mx-20 gap-8">
          <PomodoroTimer />
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default Home