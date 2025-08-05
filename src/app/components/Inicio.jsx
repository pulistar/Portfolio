import { useTranslation } from 'react-i18next';
import { BsDownload } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import Camilo from '../../assets/imagenes/inicio.png';

const Inicio = () => {
    const { t } = useTranslation();

    const handleDownloadCV = () => {
        // Aquí puedes agregar la lógica para descargar el CV
        const link = document.createElement('a');
        link.href = '/cv-camilo.pdf'; // Asegúrate de tener tu CV en la carpeta public
        link.download = 'CV-Camilo-Pulistar.pdf';
        link.click();
    };

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
                            t('full_stack'), 
                            1000,
                            t('frontend'), 
                            1000,
                            t('backend'), 
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
                
                <button 
                    onClick={handleDownloadCV}
                    className='mt-6 mr-12 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-300'
                >
                    <BsDownload />
                    <span>{t('download_cv')}</span>
                </button>
            </div>
            <img 
                src={Camilo} 
                alt="Camilo Pulistar - Desarrollador de Software" 
                style={{ width: "400px", height: "400px" }} 
                className='text-full ssm:w-fit log:w-1/3 rounded-lg shadow-2xl' 
            />
        </section>
    )
}

export default Inicio;
