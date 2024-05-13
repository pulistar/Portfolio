import React from 'react';
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';

const Contactos = () => {
  return (
    <>
      <div id='contactos'>
        <div className='w-1/3 ssm:w-fit'>
            
            <p className='text-4xl mb-4'> esto es practica</p>
            <p className=' text-slate-300'>

                pura practica para una nueva version del portafolio

            </p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white '>

                sigue adelante..

            </button>

            <div className='flex mt-5 space-x-4 cursor-pointer'>
              
                <BsFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                <BsTwitter size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                <BsInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                <BsPinterest size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                
            </div>

        </div>
      </div>
    
    
    
    
    
    </>
  )
}

export default Contactos;
