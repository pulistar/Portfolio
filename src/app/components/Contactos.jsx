import { useTranslation } from 'react-i18next';
import { BsEnvelope, BsGeoAlt, BsGithub, BsLinkedin, BsTelephone } from 'react-icons/bs';

const Contactos = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <section id='contactos' className="py-20">
        <div className="text-white mb-16 flex flex-col text-center items-center">
          <h1 className="text-4xl font-roboto mb-3">{t('contact')}</h1>
          <span className="bg-blue-600 w-32 h-3 mb-2 rounded-full"></span>
          <p className="text-gray-300 mt-4 max-w-2xl">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él! 
            Estoy siempre abierto a nuevas oportunidades y colaboraciones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('get_in_touch')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-blue-600/20 p-4 rounded-xl">
                  <BsEnvelope className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">pulistarlopez@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-green-600/20 p-4 rounded-xl">
                  <BsTelephone className="text-green-400" size={32} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Teléfono</h3>
                  <p className="text-gray-300">+57 323 442 7114</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-purple-600/20 p-4 rounded-xl">
                  <BsGeoAlt className="text-purple-400" size={32} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Ubicación</h3>
                  <p className="text-gray-300">Pasto, Nariño</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="text-center">
              
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/camilo-pulistar-ab56b8352" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 border border-blue-600 p-4 rounded-xl hover:bg-blue-600/30 transition-all duration-300 hover:scale-105"
                >
                  <BsLinkedin size={28} className="text-blue-400" />
                </a>
                <a 
                  href="https://github.com/pulistar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-600/20 border border-gray-600 p-4 rounded-xl hover:bg-gray-600/30 transition-all duration-300 hover:scale-105"
                >
                  <BsGithub size={28} className="text-gray-400" />
                </a>
                <a 
                  href="mailto:pulistarlopez@gmail.com" 
                  className="bg-red-600/20 border border-red-600 p-4 rounded-xl hover:bg-red-600/30 transition-all duration-300 hover:scale-105"
                >
                  <BsEnvelope size={28} className="text-red-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactos;
