import React from 'react';
import 'tailwindcss/tailwind.css';
import corazon from '../../assets/imagenes/corazon.jpg';
import hoja from '../../assets/imagenes/hoja.jpg';
import noche from '../../assets/imagenes/noche.jpg';
import robot from '../../assets/imagenes/robot.jpg';

const Proyectos = () => {
  const proyectos = [
    { id: 1, nombre: 'python', imagen: corazon},
    { id: 2, nombre: 'python', imagen: hoja},
    { id: 3, nombre: 'python', imagen: noche},
    { id: 4, nombre: 'python', imagen: robot},
    { id: 5, nombre: 'python', imagen: corazon},
    { id: 6, nombre: 'python', imagen: hoja},
    { id: 7, nombre: 'python', imagen: noche},
    { id: 8, nombre: 'python', imagen: robot},
    { id: 9, nombre: 'python', imagen: corazon},
    { id: 10, nombre: 'python', imagen: hoja},
    { id: 11, nombre: 'python', imagen: noche},
    { id: 12, nombre: 'python', imagen: robot},
    
  ];

  return (
    <>
      <div id='habilidades' className="text-white mt-20 mb-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto mb-3">Habilidades</h1>
        <span className="bg-blue-600 w-32 h-3 mb-2 rounded-full"></span>
      </div>

      <div className="w-full  flex items-center justify-center ">
        <div className="md:w-2/4 text-white">
        
          <div className="flex flex-wrap justify-center sm:grid-cols-2">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="w-40 h-16 p-1">
                <div className="border border-white h-full rounded-md bg-gray-800">
            
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
