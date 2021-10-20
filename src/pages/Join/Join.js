import './Join.scss';
import icon3 from '../../assets/img/icons/discord_icon.svg';
import back from '../../assets/img/website_art/6.webp';
import title from '../../assets/img/font_svg/become-a-cyberunner-text.svg';

export const Join = () => {
    return (
        <div className="join">
            <div className="join__back__wrapper">            
                <img className="join__back" alt="back" src={back}></img>
            </div>
            <div className="container">
                <div className="join__popup">
                    <div>
                        <img src={title} alt="title" className="join__popup__title"></img>
                        <p className="join__popup__desc">The rich and colourful Cyberverse is waiting to be explored by you. Make sure to join our community to start your adventure!</p>
                        <button className="join__popup__button" onClick={() => { window.location.href = "https://discord.gg/cyberunners" }}>
                            <img alt="icon" src={icon3}></img>
                            JOIN DISCORD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join;