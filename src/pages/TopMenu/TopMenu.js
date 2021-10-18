import {NotificationManager} from 'react-notifications';
import { Link } from 'react-scroll'

import './TopMenu.scss';

import logo from '../../assets/logo.png';
import topIcon1 from '../../assets/img/icons/topIcon1.png';
import topIcon2 from '../../assets/img/icons/topIcon2.png';
import topIcon3 from '../../assets/img/icons/topIcon3.png';

import menuIcon from '../../assets/img/icons/menu.png';

const menu = [
    "team", "roadmap", "rarity", "about", "home"
];

const TopLogo = () => {
    return (
        <div className="topMenu__logo">
            <img src={logo} className="topMenu__logo__img" alt="logo"></img>
            <div className="topMenu__logo__text">CYBERUNNERS</div>
        </div>
    )
}

const TopButtons = () => {
    const connectWallet = () => {
        NotificationManager.info('Sorry, metamask wallet connection is currently unavailable, please comeback on drop day');
    }

    return (
        <div className="topMenu__menu">
            <button className="topMenu__menu__walletBtn" onClick={ connectWallet } >CONNECT WALLET</button>
            <div className="topMenu__menu__icons">
                <a href="#javascript;"><img src={ topIcon1 } alt="logo"></img></a>
                <a href="#javascript;"><img src={ topIcon2 } alt="logo"></img></a>
                <a href="#javascript;"><img src={ topIcon3 } alt="logo"></img></a>
            </div>

            <div className="topMenu__menu__dropDownMenu">
                <img src={menuIcon} className="topMenu__menu__dropDownMenu__icon" alt="menu"></img>
                <div className="topMenu__menu__dropDownMenu__content">
                    {
                        menu.map((item, index) => (
                            <Link
                                key={index}
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                to={ item }
                                offset={ 5 }
                            >
                                { item.toUpperCase() }
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export const TopMenu = () => {
    return (
        <div className="topMenu container">
            <TopLogo />
            <TopButtons />
        </div>
    )
}

export default TopMenu;