import { NavLink } from "react-router-dom";
import "./../App.css"

const Header = () => {
    const activeStyle = {background: "#0585A8"}
    return (
        <div className="navBarContainer">
            <nav className="headerContainer">
                <NavLink to = "/" className="navLink" activeStyle={activeStyle} exact>Home</NavLink>
                <NavLink to = "/messenger" className="navLink" activeStyle={activeStyle}>Messenger</NavLink>
                <NavLink to = "/shoplist" className="navLink" activeStyle={activeStyle}>ShopList</NavLink>
                <NavLink to = "/StopWatch" className="navLink" activeStyle={activeStyle}>StopWatch</NavLink>
                <NavLink to = "/MusicPlay" className = "navLink" activeStyle={activeStyle}>MusicPlay</NavLink>
            </nav>
        </div>
    )
}

export default Header;