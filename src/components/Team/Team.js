import './Team.scss';
import tag from '../../assets/img/tags/5.svg';
import teamImg1 from '../../assets/img/team_images/1.png';
import teamImg2 from '../../assets/img/team_images/2.png';

import instagramBlue from '../../assets/img/icons/instagram-blue.svg';
import instagramRed from '../../assets/img/icons/instagram-red.svg';

import twitterBlue from '../../assets/img/icons/twitter-blue.svg';
import twitterRed from '../../assets/img/icons/twitter-red.svg';

import title from '../../assets/img/font_svg/theteam-text.svg';

export const Team = () => {
    return (
        <div className="team container" id="team">
            <div className="team__members">
                <img alt="tag" className="team__members__tag" src={tag}></img>
                <div className="team__members__content">
                    <img alt="title" className="team__members__content__title" src={title}></img>
                    <p className="team__members__content__desc">MEET THE ARTISTS BEHIND CYBERUNNERS!</p>

                    <div className="team__members__content__people">
                        <div>
                            <img alt="people" src={teamImg1}></img>
                            <p className="team__members__content__people__name">TheHexaMan</p>
                            <p className="team__members__content__people__desc">Co-Creator, Creative Director and Project Manager</p>

                            <div className="socialIcons">
                                <a href="https://twitter.com/TheHexaMan"><img alt="icon" className="team__members__content__people__firstIcon" src={twitterRed}></img></a>
                                <a href="https://www.instagram.com/thehexaman"><img alt="icon" className="team__members__content__people__firstIcon" src={instagramRed}></img></a>
                            </div>
                        </div>

                        <div style={{ paddingRight: '0' }}>
                            <img alt="people" src={teamImg2}></img>
                            <p className="team__members__content__people__name">Kristina</p>
                            <p className="team__members__content__people__desc">Co-Creator, Illustrator and Graphic Artist</p>

                            <div className="socialIcons">
                                <a href="https://twitter.com/the__Mess"><img alt="icon" className="team__members__content__people__secondIcon" src={twitterBlue}></img></a>
                                <a href="https://www.instagram.com/kristina__kerstner"><img alt="icon" className="team__members__content__people__secondIcon" src={instagramBlue}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;