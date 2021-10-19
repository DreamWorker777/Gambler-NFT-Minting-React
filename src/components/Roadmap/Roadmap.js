import React, { useRef, useState } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './Roadmap.scss';
import tag from '../../assets/img/tags/6.png';
import postTag from '../../assets/img/tags/4.png';
import back from '../../assets/img/website_art/5.webp';

const SlideShow = () => {
    const slideRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mobile, setMobile] = useState(false);

    const slides = [
        {
            index: 'P01',
            title: 'THE LAUNCH',
            content: `
                <p>We are currently working hard on finalizing the CYBERUNNER collection.</p>
                <p>We will be making constant announcements on our Discord to keep our community</p>
                <p>updated with our progress. This will include exclusive look into the project,</p>
                <p>behind the scenes content and getting our members involved with suggestions</p>
                <p>to ensure a satisfactory and successful launch!</p>
            `
        }, {
            index: 'P02',
            title: 'CYBER SOCIETY CLOTHING',
            content: `
                <p>Our merchandise line will go live! We will be working with fashion designers</p>
                <p>to create clothing that is innovative, visionary and true to the retro-punk</p>
                <p>aesthetic of <span>CYBERUNNERS.</span></p>
            `
        }, {
            index: 'P03',
            title: 'CYBERUNNERS X COMMUNITY',
            content: `
                <p>A collection is nothing without its community which is why we want to celebrate</p>
                <p>the talents of our members through our planned collaborative projects:</p>
                <p className="mt">- Community Youtube LoFi/synthwave Channel.</p>
                <p>- CYBERUNNERS X COMMUNITY NFT Collection.</p>
                <p>- CYBERUNNERS Comic Based on Community Lore.</p>
                <p>- CYBERUNNERS Short Film / TV Show Pilot.</p>
            `
        }, {
            index: 'P04',
            title: 'THE CYBERNET',
            content: `
                <p>CYBERUNNERS will venture further into the metaverse! Virtual experiences will</p>
                <p>be created to allow the community to meet and interact with each other, discover</p>
                <p>community works, join exclusive events and to dive deeper into the Cyberverse!</p>
            `
        }, {
            index: 'P05',
            title: 'THE FUTURE OF CYBERUNNERS',
            content: `
                <p>We are excited about the future of CYBERUNNERS and the different potentials that</p>
                <p>it can grow into. Our passion for the Cyberverse will continue to grow and evolve</p>
                <p>and we hope to expand the vibrant universe we have created into different artistic</p>
                <p>mediums. We are currently exploring ventures such as starting our very own TV Show, </p>
                <p>Trading Cards or even physical collectables. The possibilities for the future are endless </p>
                <p>and we look forward to having you with us on every step of the way!</p>
            `
        }
    ]

    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        indicators: false,
        autoplay: false,
        onChange: () => {
            setTimeout(() => {
                setCurrentIndex( slideRef.current.state.index );
            }, 100)
        }
    };

    const goToIndex = ( idx ) => {
        slideRef.current.goTo(idx);
    }

    useState(() => {
        setInterval(() => {
            if( window.innerWidth > 768 )
                setMobile(false);
            else
                setMobile(true);
        }, 100);
    })

    return (
            !mobile ?
                <Slide easing="ease" {...properties} ref={ slideRef }>
                    {slides.map((each, index) => (
                        <div key={index} className={`roadmap__post__eachItem ${ currentIndex === index ? 'active' : '' }`} onClick={() => goToIndex(index)}>
                            <p className="roadmap__post__eachItem__index">{each.index}</p>
                            <p className="roadmap__post__eachItem__title">{each.title}</p>
                            <div 
                                className="roadmap__post__eachItem__content" 
                                dangerouslySetInnerHTML={{
                                    __html: each.content
                                }}>
                            </div>
                        </div>
                    ))}
                </Slide> : (
                <div className="roadmap__post__slides">
                    {slides.map((each, index) => (
                        <div key={index} style={{ position: 'relative' }} >
                            <div className={`roadmap__post__eachItem__line ${ index == 4 ? 'end' : '' }`}>
                                <span></span>
                            </div>

                            <div className={`roadmap__post__eachItem ${ currentIndex === index ? 'active' : '' }`} >
                                <p className="roadmap__post__eachItem__index">{each.index}</p>
                                <p className="roadmap__post__eachItem__title">{each.title}</p>
                                <div 
                                    className="roadmap__post__eachItem__content" 
                                    dangerouslySetInnerHTML={{
                                        __html: each.content
                                    }}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                )
    )
}

export const RoadMap = () => {
    return (
        <div className="roadmap" id="roadmap">
            <div className="roadmap__content__wrapper">
                <div className="roadmap__content">
                    <img alt="tag" className="roadmap__content__tag" src={tag}></img>
                    <div className="roadmap__content__desc">
                        <div>
                            <p className="roadmap__content__desc__title">ROADMAP</p>
                            <p className="roadmap__content__desc__first">Our vision for the future of CYBERUNNERS is filled with many exciting milestones to look forward to. We hope to expand the Cyberverse to many mediums to create an extensive universe for our supporters to explore!</p>
                            <p className="roadmap__content__desc__second">Roadmap wil not be rolled out in a sequential manner but might have two or more phases happening concurently.</p>
                        </div>
                    </div>
                    <div className="roadmap__content__back">
                        <img alt="back" src={back}></img>
                    </div>
                </div>
            </div>
            

            <div className="roadmap__post__wrapper">
                <div className="roadmap__post">
                    <img alt="tag" className="roadmap__post__tag" src={postTag}></img>
                    <SlideShow />
                </div>
            </div>
        </div>
    )
}

export default RoadMap;