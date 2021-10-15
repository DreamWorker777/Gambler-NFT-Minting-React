import './Footer.scss';
import logo from '../../assets/img/icons/logo_white.png';
import logoText from '../../assets/logoText.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__logo">
                    <img src={logo} className="footer__content__logo__img" alt="logo"></img>
                    <img src={logoText} className="footer__content__logo__text" alt="logo"></img>
                </div>

                <div className="footer__content__menu">
                    <a href="#javascript">TEAM</a>
                    <a href="#javascript">ROADMAP</a>
                    <a href="#javascript">RARITY</a>
                    <a href="#javascript">ABOUT</a>
                </div>

                <div className="footer__content__policy">
                    <a href="#javascript">TERMS & CONDITIONS</a>
                    <a href="#javascript">PRIVACY POLICY</a>
                    <a href="#javascript">SMART CONTRACTS</a>
                </div>

                <div className="footer__content__community">
                    <a href="#javascript">JOIN DISCORD</a>
                    <a href="#javascript">TWITTWER</a>
                    <a href="#javascript">INSTAGRAM</a>
                </div>
            </div>

            <div className="footer__copyright">
                © 2021 CYBERUNNERS. ALL RIGHTS RESERVED
            </div>
        </div>
    )
}

export default Footer;