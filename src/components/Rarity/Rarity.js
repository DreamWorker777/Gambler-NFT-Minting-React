import { useState, useEffect } from 'react';

import './Rarity.scss';
import tag from '../../assets/img/tags/2.png';
import exploreTag from '../../assets/img/tags/3.png';
import back from '../../assets/img/bg/webp/3.webp';

import body1 from '../../assets/img/layers/webp/1-body-01.webp';
import body2 from '../../assets/img/layers/webp/1-body-02.webp';
import body3 from '../../assets/img/layers/webp/1-body-03.webp';
import body4 from '../../assets/img/layers/webp/1-body-04.webp';
import body5 from '../../assets/img/layers/webp/1-body-05.webp';

import clothing1 from '../../assets/img/layers/webp/2-clothing-01.webp';
import clothing2 from '../../assets/img/layers/webp/2-clothing-02.webp';
import clothing3 from '../../assets/img/layers/webp/2-clothing-03.webp';
import clothing4 from '../../assets/img/layers/webp/2-clothing-04.webp';
import clothing5 from '../../assets/img/layers/webp/2-clothing-05.webp';
import clothing6 from '../../assets/img/layers/webp/2-clothing-06.webp';

import biomods1 from '../../assets/img/layers/webp/3-biomods-01.webp';
import biomods2 from '../../assets/img/layers/webp/3-biomods-02.webp';
import biomods3 from '../../assets/img/layers/webp/3-biomods-03.webp';
import biomods4 from '../../assets/img/layers/webp/3-biomods-04.webp';
import biomods5 from '../../assets/img/layers/webp/3-biomods-05.webp';

import hair1 from '../../assets/img/layers/webp/4-hear-01.webp';
import hair2 from '../../assets/img/layers/webp/4-hear-02.webp';
import hair3 from '../../assets/img/layers/webp/4-hear-03.webp';
import hair4 from '../../assets/img/layers/webp/4-hear-04.webp';
import hair5 from '../../assets/img/layers/webp/4-hear-05.webp';

import glass1 from '../../assets/img/layers/webp/5-glases-01.webp';
import glass2 from '../../assets/img/layers/webp/5-glases-02.webp';
import glass3 from '../../assets/img/layers/webp/5-glases-03.webp';
import glass4 from '../../assets/img/layers/webp/5-glases-04.webp';
import glass5 from '../../assets/img/layers/webp/5-glases-05.webp';

const layers = {
    body: [body1, body2, body3, body4, body5],
    clothing: [clothing1, clothing2, clothing3, clothing4, clothing5, clothing6],
    biomods: [biomods1, biomods2, biomods3, biomods4, biomods5],
    hair: [hair1, hair2, hair3, hair4, hair5],
    glass: [glass1, glass2, glass3, glass4, glass5]
}

const Explore = ({ hidden }) => {
    const [timeInterval, setTimeInterval] = useState(0);
    const [ characSetting, setCharacSetting ] = useState({
        body: 0,
        clothing: 0,
        biomods: 0,
        hair: 0,
        glass: 0
    });

    const clickBody = ( type ) => {
        clearInterval(timeInterval);

        let temp = characSetting[type];

        const interval = setInterval(() => {
            temp ++;
            temp = temp > layers[type].length - 1 ? 0 : temp;
            
            setCharacSetting(prev => { return { ...prev, [type]: temp } });
        }, 1000);

        setTimeInterval(interval);
    }

    return (
        <div className={`rarity__explore ${hidden}`}>
            <div className="container">
                <img alt="tag" className="rarity__explore__tag" src={exploreTag}></img>
                <div className="subContainer">
                    <p className="rarity__explore__title">CLICK TO EXPLORE</p>

                    <div className="rarity__explore__charac">
                        <div>
                            <img alt="character" style={{ position: 'unset' }} src={ layers.body[ characSetting.body ] }></img>
                            <img alt="character" src={ layers.clothing[ characSetting.clothing ] }></img>
                            <img alt="character" src={ layers.biomods[ characSetting.biomods ] }></img>
                            <img alt="character" src={ layers.hair[ characSetting.hair ] }></img>
                            <img alt="character" src={ layers.glass[ characSetting.glass ] }></img>

                            <a href="#javascript;" onClick={ () => clickBody("hair") }><p className="rarity__explore__charac__hair">HAIR</p></a>
                            <a href="#javascript;" onClick={ () => clickBody("glass") }><p className="rarity__explore__charac__eyewear">EYEWEAR</p></a>
                            <a href="#javascript;" onClick={ () => clickBody("biomods") }><p className="rarity__explore__charac__biomods">BIOMODS</p></a>
                            <a href="#javascript;" onClick={ () => clickBody("body") }><p className="rarity__explore__charac__body">BODY</p></a>
                            <a href="#javascript;" onClick={ () => clickBody("clothing") }><p className="rarity__explore__charac__clothing">CLOTHING</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Rarity = () => {
    const [showExplore, setShowExplore] = useState(false);

    useEffect(() => {
        Object.keys(layers).forEach((key) => {
            layers[key].forEach((item) => {
                const img = new Image();
                img.src = item;
            });
        })
    }, []);

    return (
        <div className="rarity" id="rarity">
            <div className="rarity__content">
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
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
            </div>
            {
                showExplore ? (
                    <Explore hidden={''} />
                ) : <Explore hidden={'hidden'} />
            }

        </div>
    )
}

export default Rarity;