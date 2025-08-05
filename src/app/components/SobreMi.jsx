import { useTranslation } from 'react-i18next';
import { BsCodeSlash, BsLaptop, BsLightbulb } from 'react-icons/bs';

const SobreMi = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: <BsCodeSlash size={40} />, number: '1+', label: t('experience_years') },
    { icon: <BsLaptop size={40} />, number: '10+', label: t('projects_completed') },
    { icon: <BsLightbulb size={40} />, number: '10+', label: t('technologies_used') },
  ];

  return (
    <section id='sobre-mi' className='py-20 text-white'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-roboto mb-3'>{t('about')}</h1>
        <span className='bg-blue-600 w-32 h-3 mb-2 rounded-full inline-block'></span>
      </div>

              <div className='max-w-6xl mx-auto px-4'>
          <div className='grid log:grid-cols-2 gap-12 items-center'>
            <div>
              
              <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
                {t('about_description')}
              </p>
             
              
            
            </div>

            <div className='grid grid-cols-1 gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300'>
                  <div className='flex items-center space-x-4'>
                    <div className='text-blue-400'>
                      {stat.icon}
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-white'>{stat.number}</div>
                      <div className='text-gray-400'>{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default SobreMi; 