import { useContext } from 'react';
import LanguageContext from '../context/language.context';
import skills from '../translations/skills';
import styles from '../style/skills.module.css';

export function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <div id="skills" className={ styles.container }>
      <div className={ styles.subcontainer }>
        <div className={ styles.containerTitle }>
          <h1 className={ styles.title }>{skills[language].title}</h1>
          <h1 className={ styles.subtitle }>{skills[language].subTitle}</h1>
        </div>
        <div className={ styles.main }>
          {skills.screenSkills.map((skill, index) => (
            <div key={ index } className={ styles.skill }>
              <img src={ skill.image } alt={ skill.title } />
              <div className={ styles.textContainer }>
                <h3 className={ styles.skillTitle }>{skill.title}</h3>
                <p className={ styles.text }>
                  {skill[`description${language.toUpperCase()}`]}
                </p>
                <h4 className={ styles.languageTitle }>
                  {skill[`languagesTitle${language.toUpperCase()}`]}
                </h4>
                <ul className={ styles.languages }>
                  {skill.languages.map((lang) => (
                    <li key={ lang }>{lang}</li>
                  ))}
                </ul>
                <h4 className={ styles.toolsTitle }>
                  {skill[`toolsTitle${language.toUpperCase()}`]}
                </h4>
                <ul className={ styles.tools }>
                  {skill.tools.map((tool) => (
                    <li key={ tool }>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
