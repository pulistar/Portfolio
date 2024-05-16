import React from 'react';
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';

const Contactos = () => {
  return (
    <>
      <footer id='contactos' className=" py-10">

        <div  className="text-white mt-20 mb-8 flex flex-col text-center items-center">
          <h1 className="text-4xl font-roboto mb-3">Contactos</h1>
          <span className="bg-blue-600 w-32 h-3 mb-2 rounded-full"></span>
        </div>

        <div  className='mt-3 mb-7 flex justify-center'>
          <div className='flex space-x-8 text-white'>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={40} className='border-4 border-transparent hover:border-blue-800 rounded-full transition duration-300 ease-in-out'/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsGithub size={40} className='border-4 border-transparent hover:border-red-500 rounded-full transition duration-300 ease-in-out'/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsEnvelope size={40} className='border-4 border-transparent hover:border-pink-300 rounded-full transition duration-300 ease-in-out'/>
            </a>

          </div>
        </div>
        
      </footer>
    </>
  )
}

export default Contactos;
