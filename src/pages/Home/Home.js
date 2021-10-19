import Intro from '../../components/Intro/Intro';
import About from '../../components/About/About';
import Rarity from '../../components/Rarity/Rarity';
import RoadMap from '../../components/Roadmap/Roadmap';
import Team from '../../components/Team/Team';

export const Home = () => {
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