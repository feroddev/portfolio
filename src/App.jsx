import { About } from './components/About';
import Header from './components/Header';
import { MainInfo } from './components/MainInfo';
import LanguageProvider from './context/language.provider';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <MainInfo />
      <About />
    </LanguageProvider>
  );
}

export default App;
