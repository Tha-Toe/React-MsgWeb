import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css"

const Header = () => {
    //const activeStyle = {background: "#0585A8"}

    const [ofsl,setOfsl] = useState("");
    const [ofsw,setOfsw] = useState("")

    const ofslFunction = (event) => {
        const ofslValue = event.target.offsetLeft + "px";
        setOfsl(ofslValue);
        const ofsWidth = event.target.offsetWidth + "px";
        setOfsw(ofsWidth);
        console.log(ofsWidth);
    }
    return (
        <div className="navBarContainer">
            <nav className="headerContainer">
                <NavLink to = "/" className="navLink" onClick={ofslFunction} exact>Home</NavLink>
                <NavLink to = "/messenger" className="navLink" onClick={ofslFunction} >Messenger</NavLink>
                <NavLink to = "/shoplist" className="navLink" onClick={ofslFunction} >ShopList</NavLink>
                <NavLink to = "/StopWatch" className="navLink" onClick={ofslFunction} >StopWatch</NavLink>
                <NavLink to = "/MusicPlay" className = "navLink" onClick={ofslFunction} >MusicPlay</NavLink>
            </nav>
            <div className="tabMenuContainer">
            <div className = "tabMenu" style={{transform: `translateX(${ofsl})`,width: `${ofsw}`}}></div>
            </div>
        </div>
    )
}

export default Header;