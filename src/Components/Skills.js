import '../Styles/Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3,faJs,faBootstrap,faSass,faReact,faGitAlt,faGithub,faNpm,faLinux } from "@fortawesome/free-brands-svg-icons";
function Skills({language}) {
    const mode = {
        EN:['My Tech Stack'],
        RU:['Мой Стэк Технологий']
    }
    let personalFont = null;
    if(language === "RU") {
        personalFont = {
            fontWeight:'100'
        }
    }
    return (
        <section id="skills">
            <div style={personalFont} id="skillsContent">
                <div id="skillsTitle">{mode[language][0]}</div>
                <div id="technologies">
                    <div id="html" className="skillsElement">
                        <FontAwesomeIcon id="htmlIcon" className="icon" icon={faHtml5} />
                        <p className="skillsText">Html</p>
                    </div>
                    <div id="css" className="skillsElement">
                        <FontAwesomeIcon id="cssIcon" className="icon" icon={faCss3} />
                        <p className="skillsText">Css</p>
                    </div>
                    <div id="js" className="skillsElement">
                        <FontAwesomeIcon id="jsIcon" className="icon" icon={faJs} />
                        <p className="skillsText">Javascript</p>
                    </div>
                    <div id="bootstrap" className="skillsElement">
                        <FontAwesomeIcon id="bootstrapIcon" className="icon" icon={faBootstrap} />
                        <p className="skillsText">Bootstrap</p>
                    </div>
                    <div id="sass" className="skillsElement">
                        <FontAwesomeIcon id="sassIcon" className="icon" icon={faSass} />
                        <p className="skillsText">Sass</p>
                    </div>
                    <div id="react" className="skillsElement">
                        <FontAwesomeIcon id="reactIcon" className="icon" icon={faReact} />
                        <p className="skillsText">React</p>
                    </div>
                    <div id="git" className="skillsElement">
                        <FontAwesomeIcon id="gitIcon" className="icon" icon={faGitAlt} />
                        <p className="skillsText">Git</p>
                    </div>
                    <div id="github" className="skillsElement">
                        <FontAwesomeIcon id="githubIcon" className="icon" icon={faGithub} />
                        <p className="skillsText">Github</p>
                    </div>
                    <div id="npm" className="skillsElement">
                        <FontAwesomeIcon id="npmIcon" className="icon" icon={faNpm} />
                        <p className="skillsText">Npm</p>
                    </div>
                    <div id="linux" className="skillsElement">
                        <FontAwesomeIcon id="linuxIcon" className="icon" icon={faLinux} />
                        <p className="skillsText">Linux</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills