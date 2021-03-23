import React,{useState} from 'react';
import '../Styles/Navigation.scss';
function Navigation({toggleLanguage,language}) {
    // Toggle navlinks 
    let [toggle,setToggle] = useState(false);
    function toggleNav() {
        setToggle(!toggle)
    }
    const mode = {
        EN:['About Me','Skills','Projects','Contacts','Navigation'],
        RU:['Обо Мне','Навыки','Проекты','Контакты','Навигация']
    }
    let navlinks = null;
    if(toggle) {
        navlinks = (
            <div id="navLinks">
                <a href="#personal">{mode[language][0]}</a>
                <a href="#skills">{mode[language][1]}</a>
                <a href="#projects">{mode[language][2]}</a>
                <a href="#contact">{mode[language][3]}</a>
            </div>
        )
    }
    return (
        <div id="navigation" >
            <div className="button" id='toggleNav' onClick={toggleNav}>{mode[language][4]}</div>
            {navlinks}
            <div className="button" id="langToggle" onClick={toggleLanguage}>
                <div >{language}</div>
            </div>
        </div>
    );
}
export default Navigation