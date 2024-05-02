import { useContext } from 'react';
import LanguageContext from '../context/language.context';
import styles from '../style/header.module.css';
import header from '../translations/header';
import SmoothScrollLink from '../utils/smoothLink';

export function NavBar() {
  const { language } = useContext(LanguageContext);

  return (
    <nav className={ styles.navbar }>
      <ul className={ styles.list }>
        <li className={ styles.item }>
          <SmoothScrollLink className={ styles.text } to="home">
            {header[language].home}
          </SmoothScrollLink>
        </li>
        <li className={ styles.item }>
          <SmoothScrollLink className={ styles.text } to="about">
            {header[language].about}
          </SmoothScrollLink>
        </li>
        <li className={ styles.item }>
          <SmoothScrollLink className={ styles.text } to="skills">
            {header[language].skills}
          </SmoothScrollLink>
        </li>
        <li className={ styles.item }>
          <SmoothScrollLink className={ styles.text } to="projects">
            {header[language].projects}
          </SmoothScrollLink>
        </li>
        <li className={ styles.item }>
          <SmoothScrollLink className={ styles.text } to="contact">
            {header[language].contact}
          </SmoothScrollLink>
        </li>
      </ul>
    </nav>
  );
}
