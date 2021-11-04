import './Footer.scss';
import logo from '../../assets/img/icons/logo.svg';
import { Link } from 'react-scroll'
import { useLocation, useHistory } from 'react-router-dom'
import store from '../../store/store';

import logoText from '../../assets/img/font_svg/cyberunners-text-logo.svg';

export const Footer = () => {
    const location = useLocation();
    const history = useHistory();

    const updateScrollTo = store(state => state.updatePendingScroll);

    const menu = [
        "about", "rarity", "roadmap", "team",
    ];

    const goToScroll = (scrollTo) => {
        if( location.pathname != '/' ) {
            updateScrollTo( scrollTo );
            history.push('/');
        }
    }

    return (
        <div className="footer container">
            <div className="footer__content">
                <div className="footer__content__logo">
                    <div className="logo_wrapper">
                        <img src={logo} className="footer__content__logo__img" alt="logo"></img>
                        <img src={logoText} className="footer__content__logo__text" alt="logotext"></img>
                    </div>
                </div>

                <div className="footer__content__menu">
                    {
                        menu.map((item, index) => (
                            <Link
                                key={index}
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                to={ item }
                                onClick={() => { goToScroll(item) }}
                            >
                                { item.toUpperCase() }
                            </Link>
                        ))
                    }
                </div>

                {/* <div className="footer__content__policy">
                    <a href="#javascript">TERMS & CONDITIONS</a>
                    <a href="#javascript">PRIVACY POLICY</a>
                    <a href="#javascript">SMART CONTRACTS</a>
                </div> */}

                <div className="footer__content__community">
                    <a href="https://discord.gg/cyberunners">JOIN DISCORD</a>
                    <a href="https://twitter.com/cyberunners">TWITTER</a>
                    <a href="https://instagram.com/cyberunners">INSTAGRAM</a>
                </div>
            </div>

            <div className="footer__copyright">
                © 2021 CYBERUNNERS. ALL RIGHTS RESERVED
            </div>
        </div>
    )
}

export default Footer;