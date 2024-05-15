import React from 'react';
import 'tailwindcss/tailwind.css';
import corazon from '../../assets/imagenes/corazon.jpg';
import hoja from '../../assets/imagenes/hoja.jpg';
import noche from '../../assets/imagenes/noche.jpg';
import robot from '../../assets/imagenes/robot.jpg';

const Proyectos = () => {
  const proyectos = [
    { id: 1, nombre: 'SISTEMA DEL CORAZÓN', imagen: corazon, github: 'https://github.com/usuario/corazon', demo: 'https://tudemo.com/corazon' },
    { id: 2, nombre: 'SISTEMA DE LA HOJA', imagen: hoja, github: 'https://github.com/usuario/hoja', demo: 'https://tudemo.com/hoja' },
    { id: 3, nombre: 'SISTEMA DE NOCHE', imagen: noche, github: 'https://github.com/usuario/noche', demo: 'https://tudemo.com/noche' },
    { id: 4, nombre: 'SISTEMA DE ROBOT', imagen: robot, github: 'https://github.com/usuario/robot', demo: 'https://tudemo.com/robot' },

  ];

  return (
    <>
      <div id='proyectos' className="text-white mt-20 mb-8  flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto mb-3">Proyectos</h1>
        <span className="bg-blue-600  w-32 h-3 mb-2 rounded-full "></span>
      </div>

      <div className="flex flex-wrap justify-center items-center text-white">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="m-4 w-full sm:w-1/3">
            <div className="border border-gray-300 p-4 rounded-md bg-gray-800">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-64 object-cover rounded-md" />
                <h2 className="font-bold mt-5 text-xl text-center">{proyecto.nombre}</h2>
                <div className="flex justify-center gap-10 mt-4">
                  <a href={proyecto.github} className=' gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm  ' target="_blank" >GitHub</a>
                  <a href={proyecto.demo} className=' gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm' target="_blank">Demo</a>
                </div>
            </div>
          </div> 
        ))}
      </div>
    </>
  );
};

export default Proyectos;
