import {
    NavLink,
} from "react-router-dom";

import './MintNow.scss';
import Select from 'react-select';

import arrowLeft from '../../../assets/img/icons/arrow_left.svg';

import title from '../../../assets/img/font_svg/mint_title_congratulations.svg';
import tag from '../../../assets/img/tags/5.svg';
import pic from '../../../assets/img/mint/mint_avatar.png';

import skeleton from '../../../assets/img/icons/skeleton_white.svg';

export const MintNow = () => {
    const options = [
        { value: '1', label: '1 - 0.06 ETH' },
        { value: '2', label: '2 - 0.12 ETH' },
        { value: '3', label: '3 - 0.18 ETH' },
        { value: '4', label: '4 - 0.24 ETH' }
    ];

    return (
        <div>
            <div className="mint__backHome">
                <NavLink to={{ pathname: '/' }}>
                    <img alt="icon" src={ arrowLeft }></img>
                    Back to home 
                </NavLink>
            </div>

            <section className="mint__mintNow">
                <div className="mint__mintNow__main">
                    <div className="mint__mintNow__main__title">
                        <img alt="title" src={title}></img>
                        <p>YOU’VE BEEN SELECTED TO MINT YOUR CYBERUNNERS NFT</p>
                    </div>

                    <div className="mint__create__main__select">
                        <Select 
                            defaultMenuIsOpen = {false}
                            defaultValue={options[0]}
                            options={options} 
                            classNamePrefix="mint__create__main__select" />
                    </div>

                    <a href="#javascript;" className="mint__mintNow__main__button">
                        MINT MY CYBERUNNERS
                    </a>

                    <div className="mint__mintNow__main__timer">
                        <div className="mint__mintNow__main__timer__desc">
                            Estimated Wait Time
                        </div>
                        <div className="mint__mintNow__main__timer__wrapper">
                            <div className="mint__mintNow__main__timer__value">
                                <p className="mint__mintNow__main__timer__value__number"> 00 </p>
                            </div>

                            <div className="mint__mintNow__main__timer__split">
                                <p>:</p>
                            </div>

                            <div className="mint__mintNow__main__timer__value">
                                <p className="mint__mintNow__main__timer__value__number"> 00 </p>
                            </div>

                            <div className="mint__mintNow__main__timer__split">
                                <p>:</p>
                            </div>

                            <div className="mint__mintNow__main__timer__value">
                                <p className="mint__mintNow__main__timer__value__number"> 00 </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mint__mintNow__pic">
                    <div className="mint__mintNow__pic__wrapper">
                        <img className="mint__mintNow__pic__tag" alt="pic" src={tag}></img>
                        <img className="mint__mintNow__pic__main" alt="pic" src={pic}></img>
                    </div>

                    <div className="mint__mintNow__pic__ballance">
                        <div className="mint__mintNow__pic__ballance__icon">
                            <img alt="tag" src={skeleton}></img>
                        </div>

                        <div className="mint__mintNow__pic__ballance__detail">
                            <div className="mint__mintNow__pic__ballance__detail__number">
                                105 / 9,000
                            </div>

                            <div className="mint__mintNow__pic__ballance__detail__info">
                                CYBERUNNERS ALREADY MINTED
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mint__mintNow__timer">
                    <div className="container">
                        <div className="mint__mintNow__timer__tag">
                            <img alt="tag" src={tag}></img>
                        </div>

                        <div className="mint__mintNow__timer__desc">
                            Estimated Wait Time
                        </div>
                        <div className="mint__mintNow__timer__wrapper">
                            <div className="mint__mintNow__timer__value">
                                <p className="mint__mintNow__timer__value__desc"> DAYS </p>
                                <p className="mint__mintNow__timer__value__number"> 00 </p>
                            </div>

                            <div className="mint__mintNow__timer__split">
                                <p>:</p>
                            </div>

                            <div className="mint__mintNow__timer__value">
                                <p className="mint__mintNow__timer__value__desc"> HOURS </p>
                                <p className="mint__mintNow__timer__value__number"> 00 </p>
                            </div>

                            <div className="mint__mintNow__timer__split">
                                <p>:</p>
                            </div>

                            <div className="mint__mintNow__timer__value">
                                <p className="mint__mintNow__timer__value__desc"> MINUTES </p>
                                <p className="mint__mintNow__timer__value__number"> 00 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MintNow;