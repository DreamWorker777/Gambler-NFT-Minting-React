import './Intro.scss';

import character from '../../assets/img/charac/1.png';

const Main = () => {
    return (
        <div className="intro__main container">
            <div className="intro__main__textWhite">CYBERUNNERS</div>
            <img src={ character } className="intro__main__charac" alt="logo"></img>
            <div className="intro__main__textBorder">CYBERUNNERS</div>
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
                        <div className="intro__date__show__month">{ getMonth() }</div>
                        <div className="intro__date__show__date">{ getDate() }</div>
                        <div className="intro__date__show__year">{ getYear() }</div>
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