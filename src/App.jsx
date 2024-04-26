import { About } from './components/About';
import Header from './components/Header';
import { MainInfo } from './components/MainInfo';
import { Skills } from './components/Skills';
import LanguageProvider from './context/language.provider';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <MainInfo />
      <About />
      <Skills />
    </LanguageProvider>
  );
}

export default App;
