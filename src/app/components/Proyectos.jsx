import { useTranslation } from 'react-i18next';
import { BsGithub } from 'react-icons/bs';
import corazon from '../../assets/imagenes/corazon.jpg';
import hoja from '../../assets/imagenes/hoja.jpg';
import noche from '../../assets/imagenes/noche.jpg';
import robot from '../../assets/imagenes/robot.jpg';

const Proyectos = () => {
  const { t } = useTranslation(); 
  const proyectos = [
    { 
      id: 1, 
      nombre: t('proyecto_corazon'), 
      imagen: corazon, 
      github: 'https://github.com/pulistar/heart-system', 
      demo: 'https://heart-system-demo.vercel.app',
      descripcion: 'Sistema de monitoreo cardíaco con interfaz moderna y análisis en tiempo real.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Socket.io']
    },
    { 
      id: 2, 
      nombre: t('proyecto_hoja'), 
      imagen: hoja, 
      github: 'https://github.com/pulistar/leaf-system', 
      demo: 'https://leaf-system-demo.vercel.app',
      descripcion: 'Plataforma de gestión ambiental para el seguimiento de proyectos sostenibles.',
      tecnologias: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
    },
    { 
      id: 3, 
      nombre: t('proyecto_noche'), 
      imagen: noche, 
      github: 'https://github.com/pulistar/night-system', 
      demo: 'https://night-system-demo.vercel.app',
      descripcion: 'Aplicación de seguridad nocturna con reconocimiento facial y alertas inteligentes.',
      tecnologias: ['React Native', 'Python', 'TensorFlow', 'Firebase']
    },
    { 
      id: 4, 
      nombre: t('proyecto_robot'), 
      imagen: robot, 
      github: 'https://github.com/pulistar/robot-system', 
      demo: 'https://robot-system-demo.vercel.app',
      descripcion: 'Sistema de automatización industrial con control remoto y análisis predictivo.',
      tecnologias: ['Angular', 'Java', 'Spring Boot', 'Redis']
    },
  ];

  return (
    <>
      <div id='proyectos' className="text-white mt-20 mb-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-roboto mb-3">{t('proyectos_title')}</h1> 
        <span className="bg-blue-600 w-32 h-3 mb-2 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-600/30 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
            {/* Efecto de brillo en el borde */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative overflow-hidden">
              <img 
                src={proyecto.imagen} 
                alt={`${proyecto.nombre} - Proyecto de desarrollo`} 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
                <div className="text-center mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm mb-4 leading-relaxed font-light">
                    {proyecto.descripcion}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {proyecto.tecnologias.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium border border-blue-400/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Botón GitHub con animación */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <a 
                    href={proyecto.github} 
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center space-x-2 border border-white/20 hover:border-white/40 hover:scale-105" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <BsGithub className="text-lg" />
                    <span className="font-medium">Ver en GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Título del proyecto */}
            <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white text-center group-hover:text-blue-400 transition-colors duration-300">
                {proyecto.nombre}
              </h3>
            </div>
          </div> 
        ))}
      </div>
    </>
  );
};

export default Proyectos;
