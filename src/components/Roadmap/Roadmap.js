import React, { useState, useEffect } from 'react';

import 'react-slideshow-image/dist/styles.css'

import './Roadmap.scss';
import tag from '../../assets/img/tags/6.svg';
import postTag from '../../assets/img/tags/4.png';
import back from '../../assets/img/website_art/5.webp';
import title from '../../assets/img/font_svg/roadmap-text.svg';

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mobile, setMobile] = useState(false);
    
    const slides = [
        {
            index: 'P01',
            title: 'THE LAUNCH',
            content: `
                <p>We are currently working hard on finalizing the CYBERUNNERS collection.</p>

                <p>We will be making constant announcements on our Discord to keep our community updated with our progress. This will include exclusive insight into the project, behind the scenes content and getting our members involved with suggestions to ensure a satisfactory and successful launch!</p>
            `
        }, {
            index: 'P02',
            title: 'CYBER SOCIETY CLOTHING',
            content: `
                <p>Our merchandise line will go live! We will be working with fashion designers to create clothing that is innovative, visionary and true to the retro-punk aesthetic of <span>CYBERUNNERS.</span></p>
            `
        }, {
            index: 'P03',
            title: 'CYBERUNNERS X COMMUNITY',
            content: `
                <p>A collection is nothing without its community, which is why we want to celebrate the talents of our members through our planned collaborative projects:</p>
                <p className="mt" style="margin: 0">- Community Youtube LoFi/synthwave Channel.</p>
                <p style="margin: 0">- CYBERUNNERS X COMMUNITY NFT Collection.</p>
                <p style="margin: 0">- CYBERUNNERS Comic Based on Community Lore.</p>
                <p style="margin: 0">- CYBERUNNERS Short Film / TV Show Pilot.</p>
            `
        }, {
            index: 'P04',
            title: 'THE CYBERNET',
            content: `
                <p>CYBERUNNERS will venture further into the metaverse!</p>
                <p>Virtual experiences will be created to allow the community to meet and interact with each other, discover community works, join exclusive events and to dive deeper into the Cyberverse!</p>
            `
        }, {
            index: 'P05',
            title: 'THE FUTURE OF CYBERUNNERS',
            content: `
                <p>We are excited about the future of CYBERUNNERS and the different potentials that it can grow into. Our passion for the Cyberverse will continue to grow and evolve and we hope to expand the vibrant universe we have created into different artistic mediums.</p>
                <p>We are currently exploring ventures such as starting our very own TV Show, Trading Cards or even physical collectables. The possibilities for the future are endless and we look forward to having you with us on every step of the way!</p>
            `
        }
    ];

    const goToIndex = ( idx ) => {
        setCurrentIndex(idx);
        
        if( idx === 4 )
            return;
    }

    useEffect(() => {
        setInterval(() => {
            if( window.innerWidth > 768 )
                setMobile(false);
            else
                setMobile(true);
        }, 100);
    })

    return (
            !mobile ?
                <div className="roadmap__post__slidesWrapper">
                    <div className="roadmap__post__slidesFlex" style={{ marginLeft: `calc(25% - 50% * ${currentIndex})` }}>
                        {slides.map((each, index) => (
                            <div key={index} className={`roadmap__post__eachItem ${ currentIndex === index ? 'active' : '' }`} onClick={() => goToIndex(index)}>
                                <div style={{ display: 'flex' }}>
                                    <p className="roadmap__post__eachItem__index">{each.index}</p>
                                    { index !== 4 ? <div className="roadmap__post__eachItem__index__line"></div> : null}
                                </div>
                                <p className="roadmap__post__eachItem__title">{each.title}</p>
                                <div 
                                    className="roadmap__post__eachItem__content" 
                                    dangerouslySetInnerHTML={{
                                        __html: each.content
                                    }}>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> : (
                <div className="roadmap__post__slides">
                    {slides.map((each, index) => (
                        <div key={index} style={{ position: 'relative' }} >
                            <div className={`roadmap__post__eachItem__line ${ index === 4 ? 'end' : '' }`}>
                                <span></span>
                            </div>

                            <div className={`roadmap__post__eachItem ${ index === 0 ? 'active' : '' }`} >
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
                    <div className="roadmap__content__desc">
                        <div>
                            <img alt="title" className="roadmap__content__desc__title" src={title}></img>
                            <p className="roadmap__content__desc__first">Our vision for the future of CYBERUNNERS is filled with many exciting milestones to look forward to. This will not only include special utilities for our holders, but for the community at large!</p>
                            <p className="roadmap__content__desc__second">*Roadmap might not be rolled out in a sequential manner; different phases could commence concurrently.</p>
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