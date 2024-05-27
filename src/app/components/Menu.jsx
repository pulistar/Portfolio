import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { VscCode } from "react-icons/vsc";

const Menu = () => {
    const { t, i18n } = useTranslation();
    const [toggled, setToggled] = useState(false);

    const openMenu = () => {
        setToggled(true);
    }

    const closeMenu = () => {
        setToggled(false);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
            <header className='flex items-center  justify-between p-10  log:flex-row'>
                
                <a href='#inicio1' className='text-white font-roboto text-3xl tracking-wider flex items-center' onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                    <VscCode/>
                </a>
                
                <nav className='space-x-4'>
                    <div className='ssm:hidden log:block space-x-2'>
                        <a href='#' className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('home')}</a>
                        <a href='#proyectos' className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('projects')}</a>
                        <a href="#habilidades" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('skills')}</a>
                        
                        <a href="#contactos" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('contact')}</a>
                    </div>
                    <div className='ssm:block log:hidden'>
                        {toggled ? (
                            <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer'/>
                        ) : (
                            <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer'/>
                        )}
                    </div>
                </nav>
            </header>
            {toggled ? (
                <nav className='ssm:block log:hidden flex justify-between ml-10'>

                    <ul>
                        <li><a href='#' className='text-white text-xl cursor-pointer '>{t('home')}</a></li>
                        <li><a href='#proyectos' className='text-white text-xl cursor-pointer '>{t('projects')}</a></li>
                        <li><a href='#habilidades' className='text-white text-xl cursor-pointer '>{t('skills')}</a></li>
                        <li><a href='#contactos' className='text-white text-xl cursor-pointer '>{t('contact')}</a></li>
 
                    </ul>
                </nav>

            ) : null}
        </>
    )
}

export default Menu;
