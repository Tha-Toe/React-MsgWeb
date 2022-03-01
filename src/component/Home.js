import React, { useState } from "react";
import "./Home.css";


const ToastTag = ({lclAdd,toastClick}) => {

    return (
        <div className="toastTag"
        style={{top: "-120px", transition: "all .5s ease-in 10s" }} >
            <span>Thank you for visited my web!</span>
            <button className="toastButton" onClick={() => {lclAdd()}}>OK</button>
        </div>
    )
}


function Home () {

    const [toastClick,setToastClick] = useState(false);
    window.onload = function () {
        localStorage.getItem("key") ? setToastClick(false): setToastClick(true)
    }


    const lclAdd = () => {
        localStorage.setItem("key","OK");
        setToastClick(false);
    }
    return (
        <div className="mainContainer">
            <div className="homeContainer" >    
                <div className="home" >
                    <div className="homeText colorAndPadding ">Min Ga Lar Par</div>
                    <div className="homeNote colorAndPadding ">I'm Tha Toe(Frontend Web Developer)</div>
                    <div className="homeAddress colorAndPadding ">Welcome from my Website</div>
                </div>
            </div>
            <div className="toastBar" >
                {toastClick===false ? "" : <ToastTag lclAdd={lclAdd} toastClick={toastClick}/>}
            </div>
        </div>
    )
}

export default Home;