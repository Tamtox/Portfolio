import React,{useState} from 'react';
import '../Styles/Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight,faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Icon} from '@iconify/react';
import codewarsIcon from '@iconify-icons/simple-icons/codewars';
function Navigation({toggleLanguage,language}) {
    // Toggle navlinks 
    const [toggle,setToggle] = useState(false);
    const mode = {
        EN:['Title','About Me','Skills','Projects','Contacts','Navigation'],
        RU:['Главная','Обо Мне','Навыки','Проекты','Контакты','Навигация']
    }
    return (
        <div className={`navigation ${toggle?'navigationOpen':'navigationClose'}`} >
                <div id="email" className="linkContainer" >
                    <a className="linkIcon" href="mailto:tri3plet@gmail.com" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon className="linkIcon" icon={faEnvelopeSquare} />
                    </a>
                </div>
                <div id="github" className="linkContainer" >
                    <a className="linkIcon" href="https://github.com/Tamtox" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon className="linkIcon" icon={faGithubSquare} />
                    </a>
                </div>
                <div id="codewars" className="linkContainer" >
                    <a  className="linkIcon" href="https://www.codewars.com/users/Tamtox" rel="noopener noreferrer" target="_blank">
                    <Icon className="linkIcon" icon={codewarsIcon} />
                    </a>
                </div>
            <FontAwesomeIcon className={`navIcon ${toggle?'open':'close'}`} onClick={()=>setToggle(!toggle)} icon={faChevronCircleRight} />
        </div>
    );
}
export default Navigation
