import './nav.scss';

const NavBar = () => {
    return (
        <ul className="navBar">
            <li className="navBar__item"><button className="navBar__item__btn"> TEAM </button></li>
            <li className="navBar__item"><button className="navBar__item__btn"> ROADMAP </button></li>
            <li className="navBar__item"><button className="navBar__item__btn"> RARITY </button></li>
            <li className="navBar__item"><button className="navBar__item__btn"> ABOUT </button></li>
            <li className="navBar__item active"><button className="navBar__item__btn"> HOME </button></li>
        </ul>
    )
}

export default NavBar;