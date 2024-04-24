import { createContext } from 'react';

const LanguageContext = createContext({ setLanguage: () => {}, language: 'en' });

export default LanguageContext;
