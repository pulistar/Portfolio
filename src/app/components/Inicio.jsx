import React from 'react';
import Camilo from '../../assets/imagenes/inicio.png';

const Inicio = () => {
    return (
        <section id='inicio' className='flex mr-30  justify-center  items-center  space-x-0 log:flex-row ssm:flex-col ssm:space-y-0 text-white'>
            <div className=' text-right  log:w-1/3 ssm:w-fit'>
                <p className='text-5xl mb-3 mr-16'>Hola, soy</p>
                <h1 className='text-8xl mr-12'>Camilo</h1>
                <p className='text-4xl mt-3 mr-12  text-green-600 font-sans'>Ingeniero de Software</p>
            </div>
                <img src={Camilo} alt="Mifoto" style={{ width: "400px", height: "400px", }} className=' text-full ssm:w-fit log:w-1/3 '/>
        </section>
    )
}

export default Inicio;
