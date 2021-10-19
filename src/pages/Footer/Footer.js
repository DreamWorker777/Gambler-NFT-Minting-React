import './Footer.scss';
import logo from '../../assets/img/icons/logo.svg';
import { Link } from 'react-scroll'

export const Footer = () => {
    const menu = [
        "team", "roadmap", "rarity", "about"
    ];

    return (
        <div className="footer container">
            <div className="footer__content">
                <div className="footer__content__logo">
                    <div className="logo_wrapper">
                        <img src={logo} className="footer__content__logo__img" alt="logo"></img>
                        <div className="footer__content__logo__text">CYBERUNNERS</div>
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
                            >
                                { item.toUpperCase() }
                            </Link>
                        ))
                    }
                </div>

                <div className="footer__content__policy">
                    <a href="#javascript">TERMS & CONDITIONS</a>
                    <a href="#javascript">PRIVACY POLICY</a>
                    <a href="#javascript">SMART CONTRACTS</a>
                </div>

                <div className="footer__content__community">
                    <a href="https://discord.gg/cyberunners">JOIN DISCORD</a>
                    <a href="https://twitter.com/cyberunners">TWITTWER</a>
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