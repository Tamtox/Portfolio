import '../Styles/Personal.scss';
function Personal({language}) {
    const mode = {
        EN:['Greetings','I am an aspiring web developer and technology enthusiast. Starting my journey in programming in the beginning of 2020, I have acquired a foundation of skills in web development. I am proficient in English and Russian languages. Currently I strive to apply my knowledge to work.'],
        RU:['Приветствую','Я начинающий веб разработчик и любитель технологий. Начав свой путь в програмировании в начале 2020 года, я освоил базу навыков в веб програмировании. Я свободно владею Русским и Английским языками. На данный момент я стремлюсь применить мои знания к работе. ']
    }
    let personalFont = null ;
    if(language === "RU") {
        personalFont = {
            fontWeight:'100'
        }
    }
    return (
        <section id="personal">
            <div id="personalContent">
                <div style={personalFont} id="personalTitle">{mode[language][0]}</div>
                <div style={personalFont} id="personalText">{mode[language][1]}</div>
            </div>
        </section>
    );
}
export default Personal