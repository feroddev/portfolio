import Header from './components/Header';
import LanguageProvider from './context/language.provider';

function App() {
  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
}

export default App;
