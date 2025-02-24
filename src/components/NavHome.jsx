import { Link } from "react-router";

const NavHome = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 backdrop-blur-lg backdrop-saturate-150 border border-gray-900 shadow-lg">
        <div className="flex items-center space-x-4">
            <h1 className="font-semibold text-xl text-white">Pomodoro Zen</h1>
        </div>
        <div className="flex space-x-6 text-gray-200">
            <Link>Inicia Sesión</Link>
            <Link>Crear Cuenta</Link>
        </div>
    </nav>
  );
}

export default NavHome