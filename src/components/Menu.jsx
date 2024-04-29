import { useContext, useState } from 'react';
import LanguageContext from '../context/language.context';
import styles from '../style/menu.module.css';
import header from '../translations/header';

export function Menu() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const changeLanguage = () => {
    setLanguage((prevState) => (prevState === 'en' ? 'pt' : 'en'));
  };

  return (
    <header className={ styles.header }>
      <button
        className={ styles.hamburger }
        onClick={ toggleMenu }
        aria-label="Toggle Menu"
      >
        <div className={ `${styles.line1} ${menu ? styles.active : ''}` } />
        <div className={ `${styles.line2} ${menu ? styles.active : ''}` } />
        <div className={ `${styles.line3} ${menu ? styles.active : ''}` } />
      </button>
      {menu && (
        <nav className={ styles.navbar }>
          <ul className={ styles.list }>
            <li className={ styles.item }>
              <a className={ styles.text } href="#home">{header[language].home}</a>
            </li>
            <li className={ styles.item }>
              <a className={ styles.text } href="#about">{header[language].about}</a>
            </li>
            <li className={ styles.item }>
              <a className={ styles.text } href="#skills">{header[language].skills}</a>
            </li>
            <li className={ styles.item }>
              <a className={ styles.text } href="#projects">
                {header[language].projects}
              </a>
            </li>
            <li className={ styles.item }>
              <a className={ styles.text } href="#contact">{header[language].contact}</a>
            </li>
            <li className={ styles.item } onClick={ changeLanguage }>
              {header[language].changeLanguage}
              <img
                className={ styles.image }
                src={
                  language === 'en'
                    ? '/brazil.svg'
                    : '/united-states.svg'
                }
                alt="language"
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
