import {
    NavLink,
} from "react-router-dom";

import './Confirmation.scss';
import title from '../../../assets/img/font_svg/mint_title_congratulations.svg';
import arrowLeft from '../../../assets/img/icons/arrow_left.svg';
import tag from '../../../assets/img/tags/7.svg';

export const Confirmation = () => {
    return (
        <div>
            <div className="mint__backHome mint__confirmation__backHome">
                <NavLink to={{ pathname: '/' }}>
                    <img alt="icon" src={ arrowLeft }></img>
                    Back to home 
                </NavLink>
            </div>

            <div className="mint__confirmation">
                <div className="mint__confirmation__main">
                    <div className="mint__confirmation__main__title">
                        <img alt="img" src={title}></img>
                        <p>You have successfully registered to join our raffle to mint our unique cyberunnerS.</p>
                        <p>CHECK BACK ON OCTOBER 31ST TO SEE IF YOU WON A SPOT TO MINT OUR CYBERUNNERS</p>
                        <p>Follow us on twitter @cyberunnersNFT not to miss out on annoucements and important information</p>
                    </div>
                </div>

                <div className="mint__confirmation__timer">
                    <div className="container">
                        <div className="mint__confirmation__timer__tag">
                            <img alt="tag" src={tag}></img>
                        </div>

                        <div className="mint__confirmation__timer__desc">
                            Estimated Wait Time
                        </div>
                        <div className="mint__confirmation__timer__wrapper">
                            <div className="mint__confirmation__timer__value">
                                <p className="mint__confirmation__timer__value__desc"> DAYS </p>
                                <p className="mint__confirmation__timer__value__number"> 00 </p>
                            </div>

                            <div className="mint__confirmation__timer__split">
                                <p>:</p>
                            </div>

                            <div className="mint__confirmation__timer__value">
                                <p className="mint__confirmation__timer__value__desc"> HOURS </p>
                                <p className="mint__confirmation__timer__value__number"> 00 </p>
                            </div>

                            <div className="mint__confirmation__timer__split">
                                <p>:</p>
                            </div>

                            <div className="mint__confirmation__timer__value">
                                <p className="mint__confirmation__timer__value__desc"> MINUTES </p>
                                <p className="mint__confirmation__timer__value__number"> 00 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Confirmation;