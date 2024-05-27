import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import Camilo from '../../assets/imagenes/inicio.png';

const Inicio = () => {
    const { t } = useTranslation();

    return (
        <section id='inicio' className='flex mr-30 justify-center py-20 items-center space-x-0 log:flex-row ssm:flex-col ssm:space-y-0 text-white'>
            <div className='text-right log:w-1/3 ssm:w-fit'>
                <p className='text-5xl mb-3 mr-16'>{t('hello_text')}</p>
                <h1 className='text-8xl mr-12'>Camilo</h1>
                <h2 className='text-4xl mt-3 mr-12 text-green-600 font-sans'>
                    <TypeAnimation
                        sequence={[
                            t('software_engineer'), 
                            1000,
                            'Frontend', 
                            1000,
                            t('innovative_ideas'), 
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-roboto"
                    />
                </h2>
            </div>
            <img src={Camilo} alt="Mifoto" style={{ width: "400px", height: "400px" }} className='text-full ssm:w-fit log:w-1/3' />
        </section>
    )
}

export default Inicio;
