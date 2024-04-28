import { About } from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import { MainInfo } from './components/MainInfo';
import Projects from './components/Projects';
import { Skills } from './components/Skills';
import LanguageProvider from './context/language.provider';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <MainInfo />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </LanguageProvider>
  );
}

export default App;
