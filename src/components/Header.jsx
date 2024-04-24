import styles from '../styles/header.module.css';
import text from '../simulationapi';

export default function Header() {
  return (
    <header className={ styles.header }>
      <nav className={ styles.navbar }>
        <ul className={ styles.list }>
          <li className={ styles.item }>
            <a className={ styles.text } href="#home">Home</a>
          </li>
          <li className={ styles.item }>
            <a className={ styles.text } href="#about">About</a>
          </li>
          <li className={ styles.item }>
            <a className={ styles.text } href="#skills">Skills</a>
          </li>
          <li className={ styles.item }>
            <a className={ styles.text } href="#projects">Projects</a>
          </li>
          <li className={ styles.item }>
            <a className={ styles.text } href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
