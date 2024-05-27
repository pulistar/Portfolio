import React from 'react';
import { useTranslation } from 'react-i18next';
import { DiAngularSimple, DiCss3, DiDocker, DiGit, DiHtml5, DiJava, DiJsBadge, DiMysql, DiNodejs, DiPostgresql, DiPython, DiReact } from 'react-icons/di';
import 'tailwindcss/tailwind.css';

const Habilidades = () => {
  const habilidades = [
    { id: 1, nombre: 'Python', icono: <DiPython size={24} /> },
    { id: 2, nombre: 'JavaScript', icono: <DiJsBadge size={24} /> },
    { id: 3, nombre: 'React', icono: <DiReact size={24} /> },
    { id: 4, nombre: 'Git', icono: <DiGit size={24} /> },
    { id: 5, nombre: 'Java', icono: <DiJava size={24} /> },
    { id: 6, nombre: 'Mysql', icono: <DiMysql size={24} /> },
    { id: 7, nombre: 'HTML5', icono: <DiHtml5 size={24} /> },
    { id: 8, nombre: 'CSS3', icono: <DiCss3 size={24} /> },
    { id: 9, nombre: 'Node.js', icono: <DiNodejs size={24} /> },
    { id: 10, nombre: 'Angular', icono: <DiAngularSimple size={24} /> },
    { id: 11, nombre: 'Docker', icono: <DiDocker size={24} /> },
    { id: 12, nombre: 'Postgres', icono: <DiPostgresql size={24} /> },
    
  ];

  const { t } = useTranslation();

  return (
    <>
      <div id='habilidades' className="text-white mt-20 mb-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto mb-3">{t('skills')}</h1> 
        <span className="bg-blue-600 w-32 h-3 mb-2 rounded-full"></span>
      </div>

      <div className="w-full  flex items-center justify-center ">
        <div className="md:w-2/4 text-white">
          <div className="flex flex-wrap justify-center sm:grid-cols-2">
            {habilidades.map((habilidades) => (
              <div key={habilidades.id} className="w-40 h-16 p-1">
                <div className="border border-white h-full rounded-md bg-gray-800 flex items-center justify-center">
                  {habilidades.icono}
                  <span>{habilidades.nombre}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Habilidades;
