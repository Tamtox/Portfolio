import '../Styles/Title.scss';
function Title({language}) {
    const mode = {
        EN:['Tamerlan','Toxeitov'],
        RU:['Тамерлан','Токсеитов']
    }
    return (
        <section id="title">
            <div id="titleContent">
                <div id="firstName">{mode[language][0]}</div>
                <div></div>
                <div id="lastName">{mode[language][1]}</div>
            </div>
        </section>
    );
}
export default Title