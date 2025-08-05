import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DiAngularSimple, DiCss3, DiDocker, DiGit, DiHtml5, DiJava, DiJsBadge, DiMysql, DiNodejs, DiPostgresql, DiPython, DiReact } from 'react-icons/di';
import { SiFirebase, SiMongodb, SiTailwindcss, SiVite } from 'react-icons/si';

const Habilidades = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('frontend');
  
  const categorias = {
    frontend: [
      { id: 1, nombre: 'React', icono: <DiReact size={32} />, color: 'text-blue-400' },
      { id: 2, nombre: 'JavaScript', icono: <DiJsBadge size={32} />, color: 'text-yellow-400' },
      { id: 3, nombre: 'HTML5', icono: <DiHtml5 size={32} />, color: 'text-orange-400' },
      { id: 4, nombre: 'CSS3', icono: <DiCss3 size={32} />, color: 'text-blue-500' },
      { id: 5, nombre: 'Angular', icono: <DiAngularSimple size={32} />, color: 'text-red-400' },
      { id: 6, nombre: 'Tailwind CSS', icono: <SiTailwindcss size={32} />, color: 'text-cyan-400' },
    ],
    backend: [
      { id: 7, nombre: 'Node.js', icono: <DiNodejs size={32} />, color: 'text-green-400' },
      { id: 8, nombre: 'Python', icono: <DiPython size={32} />, color: 'text-blue-500' },
      { id: 9, nombre: 'Java', icono: <DiJava size={32} />, color: 'text-red-500' },
    ],
    database: [
      { id: 10, nombre: 'MySQL', icono: <DiMysql size={32} />, color: 'text-blue-600' },
      { id: 11, nombre: 'PostgreSQL', icono: <DiPostgresql size={32} />, color: 'text-blue-400' },
      { id: 12, nombre: 'MongoDB', icono: <SiMongodb size={32} />, color: 'text-green-500' },
    ],
    tools: [
      { id: 13, nombre: 'Git', icono: <DiGit size={32} />, color: 'text-orange-500' },
      { id: 14, nombre: 'Docker', icono: <DiDocker size={32} />, color: 'text-blue-500' },
      { id: 15, nombre: 'Vite', icono: <SiVite size={32} />, color: 'text-purple-400' },
      { id: 16, nombre: 'Firebase', icono: <SiFirebase size={32} />, color: 'text-yellow-500' },
    ],
  };

  const { t } = useTranslation();

  const botonesCategorias = [
    { id: 'frontend', nombre: 'Frontend', color: 'blue', activeClass: 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border-2 border-blue-400', inactiveClass: 'bg-gray-800/50 text-gray-300 border-2 border-gray-600 hover:bg-gray-700/50 hover:border-gray-500' },
    { id: 'backend', nombre: 'Backend', color: 'green', activeClass: 'bg-green-600 text-white shadow-lg shadow-green-600/30 border-2 border-green-400', inactiveClass: 'bg-gray-800/50 text-gray-300 border-2 border-gray-600 hover:bg-gray-700/50 hover:border-gray-500' },
    { id: 'database', nombre: 'Bases de Datos', color: 'pink', activeClass: 'bg-pink-600 text-white shadow-lg shadow-pink-600/30 border-2 border-pink-400', inactiveClass: 'bg-gray-800/50 text-gray-300 border-2 border-gray-600 hover:bg-gray-700/50 hover:border-gray-500' },
    { id: 'tools', nombre: 'Herramientas', color: 'orange', activeClass: 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 border-2 border-orange-400', inactiveClass: 'bg-gray-800/50 text-gray-300 border-2 border-gray-600 hover:bg-gray-700/50 hover:border-gray-500' },
  ];

  return (
    <>
      <div id='habilidades' className="text-white mt-20 mb-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto mb-3">{t('skills')}</h1> 
        <span className="bg-blue-600 w-32 h-3 mb-2 rounded-full"></span>
      </div>

      {/* Botones de categorías */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {botonesCategorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaActiva(categoria.id)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                categoriaActiva === categoria.id
                  ? categoria.activeClass
                  : categoria.inactiveClass
              }`}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido de la categoría seleccionada */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-10 text-center capitalize">
            {categoriaActiva === 'frontend' ? 'Frontend' : 
             categoriaActiva === 'backend' ? 'Backend' : 
             categoriaActiva === 'database' ? 'Bases de Datos' : 'Herramientas'}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categorias[categoriaActiva].map((habilidad) => (
              <div key={habilidad.id} className="group relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-gradient-to-br hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                {/* Efecto de brillo en el borde */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`${habilidad.color} mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                    {habilidad.icono}
                  </div>
                  
                  <h4 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {habilidad.nombre}
                  </h4>
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
