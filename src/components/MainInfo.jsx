import { useContext } from 'react';
import LanguageContext from '../context/language.context';
import styles from '../style/mainInfo.module.css';
import mainInfo from '../translations/mainInfo';

export function MainInfo() {
  const { language } = useContext(LanguageContext);

  return (
    <div id="home" className={ styles.container }>
      <div className={ styles.subContainer }>
        <div className={ styles.info }>
          <h2 className={ styles.greatings }>{mainInfo[language].greatings}</h2>
          <h1 className={ styles.carrer }>{mainInfo[language].carrer}</h1>
          <a
            className={ styles.button }
            href="/Curriculo_Felipe_Rodrigues_Desenvolvedor_Fullstack.pdf"
            download="Felipe_Rodrigues_Desenvolvedor_Fullstack.pdf"
          >
            {mainInfo[language].button}
          </a>
          <div className={ styles.logos }>
            <a
              href="https://github.com/feroddev"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/github.svg" alt="GitHub" className={ styles.logo } />
            </a>
            <a
              href="https://www.linkedin.com/in/feroddev/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/linkedin.svg" alt="Linkedin" className={ styles.logo } />
            </a>
          </div>
        </div>
        <img src="/programing.png" alt="developer" className={ styles.image } />
      </div>
    </div>
  );
}
