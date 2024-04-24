import { useState } from 'react';
import LanguageContext from './language.context';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={ { language, setLanguage } }>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
