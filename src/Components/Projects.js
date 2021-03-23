import '../Styles/Projects.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination,Scrollbar,A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import weatherImg from '../Styles/img/Weather.png';
import tictactoeImg from '../Styles/img/Tictactoe.png';
import currency from '../Styles/img/Currency.png';

SwiperCore.use([Navigation,Pagination,Scrollbar,A11y]);
function Projects({language}) {
    // Projects
    const projects = [{name:{EN:'Weather App',RU:'Приложение Погода'},imgSrc:weatherImg,websiteLink:'https://tamtox.github.io/Weather/',githubLink:'https://github.com/Tamtox/Weather'},
    {name:{EN:'Tic-Tac-Toe',RU:'Крестики Нолики'},imgSrc:tictactoeImg,websiteLink:'https://tamtox.github.io/JS-Tic-Tac-Toe/',githubLink:'https://github.com/Tamtox/JS-Tic-Tac-Toe'},
    {name:{EN:'Currency Converter',RU:'Конвертатор Валют'},imgSrc:currency,websiteLink:'https://tamtox.github.io/Currency-Converteer/',githubLink:'https://github.com/Tamtox/Currency-Converteer'},
    {name:{EN:'Shop',RU:'Магазин'},imgSrc:tictactoeImg,websiteLink:'https://tamtox.github.io/Shop/',githubLink:'https://github.com/Tamtox/Shop'}]
    const mode = {
        EN:['My Projects'],
        RU:['Мои Проекты']
    }
    let personalFont = null;
    if(language === "RU") {
        personalFont = {
            fontWeight:'300'
        }
    }
    return (
        <div id="projects">
            <div style={personalFont} id="projectsTitle">{mode[language][0]}</div>
            <div id="projectsContent">
                <Swiper className="projectsSlider" 
                spaceBetween={100}
                slidesPerView={1} 
                navigation
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true, }}
                thumbs={{swiper: 'thumbsSwiper'}}>
                    {projects.map((item,index)=>{
                        return (<SwiperSlide className="project" key={index}>
                            <p style={personalFont} className="projectTitle">{item.name[language]}</p>
                            <a className="githubLink"  href={item.githubLink} rel="noreferrer" target="_blank">Github</a>
                            <a className="projectLink" href={item.websiteLink} rel="noreferrer" target="_blank"><img className="projectImage" src={item.imgSrc} alt="" /></a>
                        </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </div>
    );
}
export default Projects