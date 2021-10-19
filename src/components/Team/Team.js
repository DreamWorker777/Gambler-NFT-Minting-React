import './Team.scss';
import tag from '../../assets/img/tags/5.png';
import teamImg1 from '../../assets/img/charac/webp/4.webp';
import teamImg2 from '../../assets/img/charac/webp/5.webp';
import icon1 from '../../assets/img/icons/topIcon3.png';
import icon2 from '../../assets/img/icons/topIcon2.png';

export const Team = () => {
    return (
        <div className="team container" id="team">
            <div className="team__members">
                <img alt="tag" className="team__members__tag" src={tag}></img>
                <div className="team__members__content">
                    <p className="team__members__content__title">THE TEAM</p>
                    <p className="team__members__content__desc">MEET THE CREATORS BEHIND CYBERUNNERS!</p>

                    <div className="team__members__content__people">
                        <div>
                            <img alt="people" src={teamImg1}></img>
                            <p className="team__members__content__people__name">TheHexaMan</p>
                            <p className="team__members__content__people__desc">Co-Creator, Creative Director and Project Manager</p>
                            <a href="https://twitter.com/TheHexaMan"><img alt="icon" className="team__members__content__people__firstIcon" src={icon1}></img></a>
                            <a href="https://www.instagram.com/thehexaman"><img alt="icon" className="team__members__content__people__firstIcon" src={icon2}></img></a>
                        </div>

                        <div style={{ paddingLeft: '5vw', paddingRight: '0' }}>
                            <img alt="people" src={teamImg2}></img>
                            <p className="team__members__content__people__name">Kristina</p>
                            <p className="team__members__content__people__desc">Co-Creator, Illustrator and Graphic Artist</p>
                            <a href="https://twitter.com/the__Mess"><img alt="icon" className="team__members__content__people__secondIcon" src={icon1}></img></a>
                            <a href="https://www.instagram.com/kristina__kerstner"><img alt="icon" className="team__members__content__people__secondIcon" src={icon2}></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;