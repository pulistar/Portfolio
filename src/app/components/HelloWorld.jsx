import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function HelloWorld() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const getTitle = () => {
    return t('hello_world');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-end p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}>
          {language === 'en' ? 'Español' : 'English'}
        </button>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <h1 className="text-4xl">{getTitle()}</h1>
      </div>
    </div>
  );
}

export default HelloWorld;
