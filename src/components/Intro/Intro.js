import './Intro.scss';

import character from '../../assets/img/website_art/1.png';
import textFilled from '../../assets/img/font_svg/cyberunners-text-filled.svg';
import textInline from '../../assets/img/font_svg/cyberunners-text-inline.svg';

const Main = () => {
    return (
        <div className="intro__main container">
            <img src={ textFilled } className="intro__main__textWhite" alt="textfilled"></img>
            <img src={ character } className="intro__main__charac" alt="logo"></img>
            <img src={ textInline } className="intro__main__textBorder" alt="textinline"></img>
        </div>
    )
}

const DateShow = () => {
    // const getMonth = () => {
    //     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //     const month = new Date().getMonth();
    //     return months[month];
    // }

    // const getDate = () => {
    //     const date = new Date().getDate();
    //     if( date < 10 )
    //         return '0' + date;
        
    //     return date;
    // }

    // const getYear = () => {
    //     const year = new Date().getFullYear();

    //     return year % 100;
    // }

    return (
        <div className="intro__dateWrapper">
            <div className="intro__date">
                <div className="border" style={{ marginBottom: 10 }}>
                    <div className="intro__date__dropText">
                        DROP DATE
                    </div>
                    <div className="intro__date__launchText">
                        LAUNCHING IN...
                    </div>
                </div>
                
                <div className="border">
                    <div className="intro__date__initializeText">
                        intializing... loading cyberunner assets
                    </div>
                    
                    <div className="intro__date__show">
                        <div className="intro__date__show__month">NOV</div>
                        <div className="intro__date__show__date">06</div>
                        <div className="intro__date__show__year">21</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Intro = () => {
    return (
        <div className="intro" id="home">
            <Main />
            <DateShow />
        </div>
    );
}

export default Intro;