import { useContext } from 'react';
import LanguageContext from '../context/language.context';
import about from '../translations/about';
import styles from '../style/about.module.css';

export function About() {
  const { language } = useContext(LanguageContext);

  return (
    <div id="about" className={ styles.container }>
      <div className={ styles.containerTitle }>
        <h1 className={ styles.title }>{about[language].title}</h1>
        <h1 className={ styles.subtitle }>{about[language].whoAmI}</h1>
      </div>
      <div className={ styles.main }>
        <img src="/profile.png" alt="perfil" />
        <div className={ styles.textContainer }>
          <p className={ styles.text }>{about[language].paragraph1}</p>
          <p className={ styles.text }>{about[language].paragraph2}</p>
          <p className={ styles.text }>{about[language].paragraph3}</p>
          <p className={ styles.text }>{about[language].paragraph4}</p>
        </div>
      </div>
    </div>
  );
}
