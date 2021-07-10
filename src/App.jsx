import './Styles/App.scss';
import React,{useState} from 'react';
import Navigation from './Components/Navigation';
import Title from './Components/Title';
import Personal from './Components/Personal';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
function App() {
  // Toggle Language
  let [lang, setLang] = useState("EN")
  function toggleLanguage() {
    if(lang === "EN") {
      setLang("RU")
    }
    else{
      setLang("EN")
    }
  }
  return (
    <div className="App">
      <Navigation language={lang} toggleLanguage={toggleLanguage} />
      <Title language={lang} />
      <Personal language={lang} />
      <Skills language={lang} />
      <Projects language={lang} />
    </div>
  );
}

export default App;
