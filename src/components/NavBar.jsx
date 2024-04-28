import { useContext } from 'react';
import LanguageContext from '../context/language.context';
import styles from '../style/header.module.css';
import header from '../translations/header';

export function NavBar() {
  const { language } = useContext(LanguageContext);

  return (
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
      </ul>
    </nav>
  );
}
