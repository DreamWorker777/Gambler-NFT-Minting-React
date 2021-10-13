import {NotificationManager} from 'react-notifications';

import './Home.scss';

import logo from '../../assets/logo.png';
import logoText from '../../assets/logoText.png';
import topIcon1 from '../../assets/img/icons/topIcon1.png';
import topIcon2 from '../../assets/img/icons/topIcon2.png';
import topIcon3 from '../../assets/img/icons/topIcon3.png';
import character from '../../assets/img/charac/1.png';
import textPng1 from '../../assets/img/homeText1.png';
import textPng2 from '../../assets/img/homeText2.png';
import menuIcon from '../../assets/img/icons/menu.png';

const TopLogo = () => {
    return (
        <div className="home__logo">
            <img src={logo} className="home__logo__img" alt="logo"></img>
            <img src={logoText} className="home__logo__text" alt="logo"></img>
        </div>
    )
}

const TopButtons = () => {
    const connectWallet = () => {
        NotificationManager.info('Sorry, metamask wallet connection is currently unavailable, please comeback on drop day');
    }

    return (
        <div className="home__topMenu">
            <button className="home__topMenu__walletBtn" onClick={ connectWallet } >CONNECT WALLET</button>
            <div className="home__topMenu__icons">
                <a href="#javascript;"><img src={ topIcon1 } alt="logo"></img></a>
                <a href="#javascript;"><img src={ topIcon2 } alt="logo"></img></a>
                <a href="#javascript;"><img src={ topIcon3 } alt="logo"></img></a>
            </div>

            <div className="home__topMenu__dropDownMenu">
                <img src={menuIcon} className="home__topMenu__dropDownMenu__icon" alt="menu"></img>
                <div className="home__topMenu__dropDownMenu__content">
                    <a href="#javascript;">HOME</a>
                    <a href="#javascript;">ABOUT</a>
                    <a href="#javascript;">RARITY</a>
                    <a href="#javascript;">ROADMAP</a>
                    <a href="#javascript;">TEAM</a>
                </div>
            </div>
        </div>
    )
}

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
            <TopLogo />
            <TopButtons />
            <Main />
            <DateShow />
            
            
        </div>
    );
}

export default Home;