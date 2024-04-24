import { useState } from 'react';
import LanguageContext from './LanguageContext';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const contextValue = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );
  return (
    <LanguageContext.Provider value={ contextValue }>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
