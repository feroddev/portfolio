import { useContext } from 'react';
import styles from '../style/contact.module.css';
import contact from '../translations/contact';
import LanguageContext from '../context/language.context';

export default function Contact() {
  const { language } = useContext(LanguageContext);

  return (
    <div id="contact" className={ styles.container }>
      <div className={ styles.containerTitle }>
        <h1 className={ styles.title }>{contact[language].title}</h1>
        <h1 className={ styles.subtitle }>{contact[language].subtitle}</h1>
      </div>
      <div className={ styles.containerSocial }>
        <div className={ styles.social }>
          <img src="/linkedin_gray.svg" alt="linkedin" />
          <a href="https://www.linkedin.com/in/feroddev/" target="_blank" rel="noreferrer">
            linkedin.com/in
            <strong>/feroddev</strong>
            /
          </a>
        </div>
        <div className={ styles.social }>
          <img src="/instagram.svg" alt="instagram" />
          <a href="https://www.instagram.com/neath.felipe/" target="_blank" rel="noreferrer">
            @
            <strong>
              neath.felipe
            </strong>
          </a>
        </div>
        <div className={ styles.social }>
          <img src="/email.svg" alt="email" />
          <a href="mailto:neath.felipe@gmail.com">
            <strong>neath.felipe</strong>
            @gmail.com
          </a>
        </div>
        <div className={ styles.social }>
          <img src="/whatsapp.svg" alt="whatsapp" />
          <a href="https://api.whatsapp.com/send?phone=5531992547049" target="_blank" rel="noopener noreferrer">
            <strong>
              +55 31 99254-7049
            </strong>
          </a>
        </div>
      </div>
      <p className={ styles.copyright }>{contact[language].copyright}</p>
    </div>
  );
}
