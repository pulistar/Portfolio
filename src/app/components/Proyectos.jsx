import React from 'react';
import corazon from '../../assets/imagenes/corazon.jpg';
import hoja from '../../assets/imagenes/hoja.jpg';
import noche from '../../assets/imagenes/noche.jpg';
import robot from '../../assets/imagenes/robot.jpg';

export default function Proyectos() {
  return (
    <div id='proyectos' >
      <div className=''>
        <div className='grid justify-items-center m-10'>
          <h1    className='text-3xl text-white mt-10'>Proyectos</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
            <div className='md:flex'>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Corazon sistema
                </div>
                <a href="#"> corazon</a>
                <p className='mt-2 text-gray-500'>
                  En este proyecto se trabajó desde React JS
                </p>
              </div>
              <div className='md:shrink-0 p-5'>
                <img src={corazon} alt="corazon" className="w-32 h-32" />
              </div> 
            </div>
          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
            <div className='md:flex'>
              <div className='md:shrink-0 p-5'>
                <img src={hoja} alt="hoja" className="w-32 h-32" />
              </div> 
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Hoja sistema
                </div>
                <a href="#"> Hoja</a>
                <p className='mt-2 text-gray-500'>
                  En este proyecto se trabajó desde React JS
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
            <div className='md:flex'>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Noche sistema
                </div>
                <a href="#"> Noche</a>
                <p className='mt-2 text-gray-500'>
                  En este proyecto se trabajó desde React JS
                </p>
              </div>
              <div className='md:shrink-0 p-5'>
                <img src={noche} alt="noche" className="w-32 h-32" />
              </div> 
            </div>
          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
            <div className='md:flex'>
              <div className='md:shrink-0 p-5'>
                <img src={robot} alt="robot" className="w-32 h-32" />
              </div> 
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Robot sistema
                </div>
                <a href="#"> Robot</a>
                <p className='mt-2 text-gray-500'>
                  En este proyecto se trabajó desde React JS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
