import React, { useRef, useState, useEffect } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './About.scss';
import back from '../../assets/img/website_art/2.png';
import pic from '../../assets/img/website_art/3.png';
import tag from '../../assets/img/tags/1.svg';

import slideImg1 from '../../assets/img/gallery/1.png';
import slideImg2 from '../../assets/img/gallery/2.png';
import slideImg3 from '../../assets/img/gallery/3.png';
import slideImg4 from '../../assets/img/gallery/4.png';
import slideImg5 from '../../assets/img/gallery/5.png';
import slideImg6 from '../../assets/img/gallery/6.png';
import slideImg7 from '../../assets/img/gallery/7.png';
import slideImg8 from '../../assets/img/gallery/8.png';
import slideImg9 from '../../assets/img/gallery/9.png';
import slideImg10 from '../../assets/img/gallery/10.png';

const slideImages = [
    slideImg1, slideImg2, slideImg3, slideImg4, slideImg5, slideImg6, slideImg7, slideImg8, slideImg9, slideImg10
];

const SlideShow = () => {
    const slideRef = useRef();
    const [slideCount, setSlideCount] = useState(7);

    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        indicators: i => (<div className="indicator"></div>)
    };

    const mouseWheelEvent = ( ev ) => {
        const y = ev.deltaY;

        if( y > 0 )
            slideRef.current.goNext();
        else
            slideRef.current.goBack();
    }

    const initialSlideCount = () => {
        if( window.innerWidth > 1500 )
            setSlideCount(7);
        else if( window.innerWidth > 768 )
            setSlideCount(5);
        else
            setSlideCount(3);
    }

    useEffect(() => {
        initialSlideCount();
        setInterval(() => {
            initialSlideCount();
        }, 100);
    }, [])

    return (
        <Slide easing="ease" {...properties}  slidesToShow={slideCount} onWheel={ mouseWheelEvent } ref={ slideRef }>
            {slideImages.map((each, index) => (
                <div key={index} className="about__slider__eachItem">
                    <div style={{ backgroundImage: `url(${each})` }}>
                    </div>
                </div>
            ))}
        </Slide>
    )
};

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about__backImage__wrapper">
                <img alt="background" className="about__back" src={back}></img>
            </div>
            <div className="about__content container">
                <img alt="tag" className="about__content__tag" src={tag}></img>

                <div className="about__content__desc">
                    <div>
                        <p>
                            <span>8,888</span> uniquely illustrated rebels from the dystopian future.
                        </p>
                        <p>
                            The collection draws inspiration from pop culture classics such as Akira, Ghost in the Shell, Bladerunner and Mad Max.
                        </p>
                        <p className="about__content__desc__bottom">
                            Each aspect was created with passion and strong attention to detail to ensure each CYBERUNNER was eccentric and true the universe we have created.
                        </p>
                    </div>
                    
                </div>
                <div className="about__content__pic">
                    <img alt="charac"  src={pic}></img>
                </div>
            </div>

            <div className="about__slider">
                <SlideShow />
            </div>
        </div>
    )
}

export default About;