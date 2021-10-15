import './Home.scss';

import character from '../../assets/img/charac/1.png';
import textPng1 from '../../assets/img/homeText1.png';
import textPng2 from '../../assets/img/homeText2.png';

const Main = () => {
    return (
        <div className="home__main">
            <img src={textPng1} className="home__main__textWhite" alt="logo"></img>
            <img src={ character } className="home__main__charac" alt="logo"></img>
            <img src={textPng2} className="home__main__textBorder" alt="logo"></img>
        </div>
    )
}

const DateShow = () => {
    const getMonth = () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = new Date().getMonth();
        return months[month];
    }

    const getDate = () => {
        const date = new Date().getDate();
        if( date < 10 )
            return '0' + date;
        
        return date;
    }

    const getYear = () => {
        const year = new Date().getFullYear();

        return year % 100;
    }

    return (
        <div className="home__date">
            <div className="home__date__dropText">
                DROP DATE
            </div>
            <div className="home__date__launchText">
                LAUNCHING IN...
            </div>

            <div className="home__date__initializeText">
                intializing... loading cyberunner assets
            </div>
            
            <div className="home__date__show">
                <div className="home__date__show__month">{ getMonth() }</div>
                <div className="home__date__show__date">{ getDate() }</div>
                <div className="home__date__show__year">{ getYear() }</div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home">
            <Main />
            <DateShow />
        </div>
    );
}

export default Home;