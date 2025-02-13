import { useState } from 'react'
import Work from './components/Work';

function App() {

  return (
    <>
      <div>
        <h2 className="mx-auto mt-24 mb-10 font-bold text-4xl text-gray-300 text-center">
          Reloj pomodoro
        </h2>
        <div className="grid grid-cols-2 mx-10">
          <div className='flex justify-center items-center'>
            <Work />
          </div>
          <div className='flex justify-center items-center'>
            <h1 className="text-gray-300">Hola</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
