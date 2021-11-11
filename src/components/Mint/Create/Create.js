import {
    NavLink,
} from "react-router-dom";

import './Create.scss';
import Select from 'react-select';

import title from '../../../assets/img/font_svg/mint_title_want_cyberunner.svg';
import discordIcon from '../../../assets/img/icons/topIcon1.svg';
import twitterIcon from '../../../assets/img/icons/topIcon2.svg';

import tag from '../../../assets/img/tags/5.svg';
import pic from '../../../assets/img/mint/mint_avatar.png';

import arrowLeft from '../../../assets/img/icons/arrow_left.svg';

export const Create = () => {
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

            <div className="mint__create">
                <div className="mint__create__main">
                    <div className="mint__create__main__title">
                        <img alt="title" src={title}></img>
                        <p>REGISTER TO JOIN THE RAFFLE</p>
                    </div>

                    <div className="mint__create__main__select">
                        <p>number of cyberunners you want to mint</p>
                        <Select 
                            defaultMenuIsOpen = {false}
                            defaultValue={options[0]}
                            options={options} 
                            classNamePrefix="mint__create__main__select" />
                    </div>

                    <div className="mint__create__main__buttons">
                        <a className="discord" href="#javascript;">
                            <img alt="icon" src={ discordIcon }></img>
                            REGISTER WITH DISCORD
                        </a>

                        <div className="splitter">
                            <p className="splitter__line"></p>
                            <p className="splitter__text">OR</p>
                            <p className="splitter__line"></p>
                        </div>

                        <a className="twitter" href="#javascript;">
                            <img alt="icon" src={ twitterIcon }></img>
                            REGISTER WITH TWITTER
                        </a>
                    </div>
                </div>

                <div className="mint__create__pic">
                    <div className="mint__create__pic__wrapper">
                        <img className="mint__create__pic__tag" alt="pic" src={tag}></img>
                        <img className="mint__create__pic__main" alt="pic" src={pic}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;