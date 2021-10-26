import {
    NavLink,
} from "react-router-dom";

import './Sorry.scss';

import arrowLeft from '../../../assets/img/icons/arrow_left.svg';

import title from '../../../assets/img/font_svg/mint_title_sorry.svg';
import tag from '../../../assets/img/tags/5.svg';
import pic from '../../../assets/img/mint/mint_avatar.png';

import skeleton from '../../../assets/img/icons/skeleton_white.svg';

export const Sorry = () => {
    return (
        <div>
            <div className="mint__backHome">
                <NavLink to={{ pathname: '/' }}>
                    <img alt="icon" src={ arrowLeft }></img>
                    Back to home 
                </NavLink>
            </div>

            <section className="mint__sorry">
                <div className="mint__sorry__main">
                    <div className="mint__sorry__main__title">
                        <img alt="title" src={title}></img>
                        <p>YOU WERE NOT SELECTED DURING THE RAFFLE, BUT YOU CAN NOW PURCHASE YOUR CYBERUNNERS ON THE  SECONDARY MARKET</p>
                    </div>

                    <a href="#javascript;" className="mint__sorry__main__button">
                        VIEW ON OPENSEA
                    </a>
                </div>

                <div className="mint__sorry__pic">
                    <div className="mint__sorry__pic__wrapper">
                        <img className="mint__sorry__pic__tag" alt="pic" src={tag}></img>
                        <img className="mint__sorry__pic__main" alt="pic" src={pic}></img>
                    </div>

                    <div className="mint__sorry__pic__ballance">
                        <div className="mint__sorry__pic__ballance__icon">
                            <img alt="tag" src={skeleton}></img>
                        </div>

                        <div className="mint__sorry__pic__ballance__detail">
                            <div className="mint__sorry__pic__ballance__detail__number">
                                105 / 9,000
                            </div>

                            <div className="mint__sorry__pic__ballance__detail__info">
                                CYBERUNNERS ALREADY MINTED
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sorry;