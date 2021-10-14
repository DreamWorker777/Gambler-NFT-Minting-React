import { useState } from 'react';

import './Rarity.scss';
import tag from '../../assets/img/tags/2.png';
import exploreTag from '../../assets/img/tags/3.png';
import back from '../../assets/img/bg/3.png';
import character from '../../assets/img/charac/5.png';

const Explore = () => {
    return (
        <div className="rarity__explore">
            <img alt="tag" className="rarity__explore__tag" src={exploreTag}></img>
            <div>
                <p className="rarity__explore__title">CLICK TO EXPLORE</p>

                <div className="rarity__explore__charac">
                    <div>
                        <img alt="character" src={character}></img>
                        <p className="rarity__explore__charac__hair">HAIR</p>
                        <p className="rarity__explore__charac__eyewear">EYEWEAR</p>
                        <p className="rarity__explore__charac__body">BODY</p>
                        <p className="rarity__explore__charac__clothing">CLOTHING</p>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

const Rarity = () => {
    const [showExplore, setShowExplore] = useState(false);

    return (
        <div className="rarity">
            <div className="rarity__content">
                <img alt="tag" className="rarity__content__tag" src={tag}></img>

                <div className="rarity__content__back">
                    <img alt="back" src={back}></img>
                </div>

                <div className="rarity__content__desc">
                    <div>
                        <p className="rarity__content__desc__title">rarity</p>
                        <p className="rarity__content__desc__first">The artworks are carefully crafted by utilising beautifully hand drawn traitsand a generative aglorithm to produce the characters of the Cyberverse.</p>
                        <p className="rarity__content__desc__second">There are 12 categories in total: Backgrounds, Bodies, Expressions, Eyes, Clothing, Stickers, Tattoos, Hair, Eyewear, Headgear, Biomods and Extras!</p>                    

                        <button className="rarity__content__desc__exploreBtn" onClick={() => setShowExplore(true)}>EXPLORE</button>
                    </div>
                </div>
            </div>
            {
                showExplore ? (
                    <Explore />
                ) : null
            }

        </div>
    )
}

export default Rarity;