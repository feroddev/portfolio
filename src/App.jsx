import Header from './components/Header';
import { MainInfo } from './components/MainInfo';
import LanguageProvider from './context/language.provider';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <MainInfo />
    </LanguageProvider>
  );
}

export default App;
