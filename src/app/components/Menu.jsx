import { useState } from 'react';
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
                
                <button 
                    className='text-white font-roboto text-3xl tracking-wider flex items-center bg-transparent border-none cursor-pointer' 
                    onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                >
                    <VscCode/>
                </button>
                
                <nav className='space-x-4'>
                    <div className='ssm:hidden log:block space-x-2'>
                        <a href='#inicio' className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('home')}</a>
                        <a href='#sobre-mi' className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('about')}</a>
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
                <nav className='ssm:block log:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg z-50'>
                    <ul className='flex flex-col p-4 space-y-4'>
                        <li><a href='#inicio' className='text-white text-xl cursor-pointer hover:text-blue-400 transition-colors' onClick={closeMenu}>{t('home')}</a></li>
                        <li><a href='#sobre-mi' className='text-white text-xl cursor-pointer hover:text-blue-400 transition-colors' onClick={closeMenu}>{t('about')}</a></li>
                        <li><a href='#proyectos' className='text-white text-xl cursor-pointer hover:text-blue-400 transition-colors' onClick={closeMenu}>{t('projects')}</a></li>
                        <li><a href='#habilidades' className='text-white text-xl cursor-pointer hover:text-blue-400 transition-colors' onClick={closeMenu}>{t('skills')}</a></li>
                        <li><a href='#contactos' className='text-white text-xl cursor-pointer hover:text-blue-400 transition-colors' onClick={closeMenu}>{t('contact')}</a></li>
                    </ul>
                </nav>
            ) : null}
        </>
    )
}

export default Menu;
