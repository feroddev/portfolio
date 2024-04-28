import { useContext } from 'react';
import styles from '../style/projects.module.css';
import projects from '../translations/projects';
import LanguageContext from '../context/language.context';

export default function Projects() {
  const { language } = useContext(LanguageContext);

  return (
    <div className={ styles.container }>
      <div className={ styles.containerTitle }>
        <h1 id="projects" className={ styles.title }>{projects[language].title}</h1>
        <h1 className={ styles.subtitle }>{projects[language].subTitle}</h1>
      </div>
      <div className={ styles.projects }>
        {projects.projects.map((project) => (
          <div key={ project.title } className={ styles.project }>
            <img src={ project.image } alt={ project.title } className={ styles.image } />
            <h2 className={ styles.titleProject }>{project.title}</h2>
            <h3 className={ styles.category }>{project.category}</h3>
            <p className={ styles.description }>
              {project[`synopsis${language.toUpperCase()}`]}
            </p>
            <div className={ styles.technologies }>
              {project.technologies.map((technology) => (
                <span key={ technology } className={ styles.technology }>
                  {technology}
                </span>
              ))}
            </div>
            <div className={ styles.logos }>
              <a href={ project.github } target="_blank" rel="noreferrer">
                <img src="/github_gray.svg" alt="git hub" className={ styles.logo } />
              </a>
              {project.site
              && (
                <a href={ project.site } target="_blank" rel="noreferrer">
                  <img src="/icon_site.svg" alt="icon site" className={ styles.logo } />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
