import '../Styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
function Contact({language}) {
    const mode = {
        EN:['E-mail', 'Github' ,'Codewars' ],
        RU:['Почта', 'Гитхаб' , 'Codewars' ]
    }
    let personalFont = null;
    if(language === "RU") {
        personalFont = {
            fontWeight:'100'
        }
    }
    return (
        <div id="contact">
            <div id="contactsContent">
                <div style={personalFont} id="email" className="linkContainer">
                    <a className="contactLink" href="mailto:tri3plet@gmail.com" rel="noopener noreferrer" target="_blank">
                        <p className="linkLabel">{`${mode[language][0]}`}</p>
                        <FontAwesomeIcon className="linkIcon" icon={faEnvelopeSquare} />
                    </a>
                </div>
                <div style={personalFont} id="github" className="linkContainer">
                    <a className="contactLink" href="https://github.com/Tamtox" rel="noopener noreferrer" target="_blank">
                        <p className="linkLabel">{`${mode[language][1]}`}</p>
                        <FontAwesomeIcon className="linkIcon" icon={faGithubSquare} />
                    </a>
                </div>
                <div style={personalFont} id="codewars" className="linkContainer">
                    <a  className="contactLink"href="https://www.codewars.com/users/Tamtox" rel="noopener noreferrer" target="_blank">
                        <p className="linkLabel">{`${mode[language][2]}`}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Contact
