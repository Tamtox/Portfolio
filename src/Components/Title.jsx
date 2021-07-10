import '../Styles/Title.scss';
function Title({language}) {
    const mode = {
        EN:['Tamerlan','Toxeitov'],
        RU:['Тамерлан','Токсеитов']
    }
    return (
        <section id="title">
            <div id="firstName" className=' slide-in-left  titleNameCard'>{mode[language][0]}</div>
            <div id="lastName" className=' slide-in-right  titleNameCard'>{mode[language][1]}</div>
        </section>
    );
}
export default Title