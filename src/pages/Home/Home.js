import Intro from '../../components/Intro/Intro';
import About from '../../components/About/About';
import Rarity from '../../components/Rarity/Rarity';
import RoadMap from '../../components/Roadmap/Roadmap';
import Team from '../../components/Team/Team';
import { useEffect } from 'react';
import store from '../../store/store';
import { scroller } from "react-scroll";

export const Home = () => {
    const scrollTo = store(state => state.pendingScroll);
    const updateScrollTo = store(state => state.updatePendingScroll);

    useEffect(() => {
        if( scrollTo !== '' ) {
            setTimeout(() => {
                scroller.scrollTo(scrollTo, {
                    duration: 500,
                    delay: 0,
                    smooth: "easeInOutQuart",
                });
    
                updateScrollTo('');
            }, 500);
        }
    }, []);

    return (
        <div>
            <Intro />
            <About />
            <Rarity />
            <RoadMap />
            <Team />
        </div>
    )
}

export default Home;