import { useContext } from 'react';
import LanguageContext from '../context/language.context';
import styles from '../style/header.module.css';
import { NavBar } from './NavBar';

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);

  const changeLanguage = () => {
    setLanguage((prevState) => (prevState === 'en' ? 'pt' : 'en'));
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.div }>
        <NavBar />
        <img
          className={ styles.image }
          onClick={ changeLanguage }
          src={
            language === 'en'
              ? '/brazil.svg'
              : 'united-states.svg'
          }
          alt="language"
        />
      </div>
    </header>
  );
}
