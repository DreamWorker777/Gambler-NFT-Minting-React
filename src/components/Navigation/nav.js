import './nav.scss';
import { Link } from 'react-scroll'

const NavBar = () => {
    const menu = [
        "team", "roadmap", "rarity", "about", "home"
    ];

    return (
        <div className="navBar">
            {
                menu.map((item) => (
                    <Link
                        activeClass="active" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        className="navBar__item"
                        to={ item }
                        offset={ 5 }
                    >
                        { item.toUpperCase() }
                    </Link>
                ))
            }
        </div>
    )
}

export default NavBar;