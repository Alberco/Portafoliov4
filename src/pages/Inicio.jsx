import React from 'react'
import fondo from '../assets/fondo17.jpg'

function Inicio() {
  return (
    <main className="z-40 w-full h-full">
      <div className='relative pt-36'>
        <img src={fondo} className="object-cover lg:h-[695px] w-full"  />
          <article className='absolute top-80'>
            <p className="text-white text-7xl text-center">
              Soy Guillermo Alberco Capistrano,
              Desarrollador de Software
            </p>
            <ul className="flex justify-center  gap-3 py-4 text-gray-400 text-5xl">
              <li>Frontend -</li>
              <li>Backend -</li>
              <li>BD</li>
            </ul>
            <div className="flex justify-center text-2xl">
              <button className="p-3 border-2  text-white hover:bg-[#0f0b22] transition-all duration-400 rounded-md">Descargar CV</button>
            </div>
          </article>
      </div>

        {/* <img src={fondo} className="object-cover w-full h-[860px] md:h-[1200px] lg:h-[960px]" /> */}
    </main>
  )
}

export default Inicio