import './Join.scss';
import icon3 from '../../assets/img/icons/Vector (6).png';
import back from '../../assets/img/bg/webp/4.webp';

export const Join = () => {
    return (
        <div className="join">
            <img alt="back" src={back}></img>
            <div className="container">
                <div className="join__popup">
                    <div>
                        <p className="join__popup__title">BECOME A CYBERUNNER</p>
                        <p className="join__popup__desc">The rich and colourful Cyberverse is waiting to be explored by you. Make sure to join our community to start your adventure!</p>
                        <button className="join__popup__button">
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