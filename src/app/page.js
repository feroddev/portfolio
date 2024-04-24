import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/page.module.css';
import LanguageContext from '../context/LanguageContext';

export default function Home() {
  return (
    <LanguageContext>
      <Header />
      <main className={ styles.main }>
        <h2>Olá, eu sou o Felipe Rodrigues</h2>
        <h1>DESENVOLVEDOR FULLSTACK</h1>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={ 100 }
          height={ 24 }
        />
      </main>
    </LanguageContext>
  );
}
