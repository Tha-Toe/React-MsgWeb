import React, { useState } from "react";
import "./stopWatch.css";

/* 
    <button type="button" className="btn btn-success botn start" onClick={startButton}>Start</button>
    <button type="button" className="btn btn-danger botn stop">Stop</button>
    <button type="button" className="btn btn-secondary botn reset">Reset</button>
*/

const TimeTag = (props) => {
    return (
        <div className="timeTextContainer">
            <div className="timeTextTag">{props.time.h < 10 ? "0" + props.time.h : props.time.h}:{props.time.m < 10? "0" + props.time.m : props.time.m}:{props.time.s < 10 ? "0" + props.time.s : props.time.s}</div>
            <div className="miliSec" >{props.time.ms < 10 ? "0" + props.time.ms : props.time.ms}</div>
        </div>
    )
}

function StopWatch () {

    const [time,setTime] = useState({ms:0 ,s: 0, m: 0, h: 0});
    const [interv,setInterv] = useState();
    const [status,setStatus] = useState(0);


    var updatedMs = time.ms, updatedS = time.s , updatedM = time.m , updatedH = time.h;

    const runTime = () => {
        updatedMs ++;
        if (updatedMs === 100) {
            updatedMs = 0;
            updatedS += 1;
            if(updatedS === 60) {
                updatedM += 1;
                updatedS = 0;
                if (updatedM === 60) {
                    updatedH += 1;
                    updatedM = 0
                }
            }
        }
        return setTime({ ms: updatedMs,s: updatedS, m: updatedM, h: updatedH});
    }

    
    const startButton = () => {
        setInterv(setInterval(runTime,10));
        setStatus(1);
    }

    const stopButton = () => {
        clearInterval(interv);
        setStatus(2);
    }

    const resetButton = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms: 0,s: 0, m: 0, h: 0})
    }

    return (
        <div className = "stopWatchContainer">
            <div className = "timeTag">
                <TimeTag time = {time}/>
            </div>
            <div className = "timmerButtonTag">
                {(status === 0) ? 
                    <div className = "timmerButtonTag">
                        <button type="button" className="btn btn-success botn start" onClick={startButton}>Start</button>
                        <button type="button" className="btn btn-secondary botn reset" onClick={resetButton}>Reset</button>
                    </div> : ""
                }
                {(status === 1) ?
                    <div className = "timmerButtonTag">
                        <button type="button" className="btn btn-danger botn stop" onClick={stopButton}>Stop</button>
                        <button type="button" className="btn btn-secondary botn reset" onClick={resetButton}>Reset</button>
                    </div> : ""
                }
                {(status === 2) ?
                    <div className = "timmerButtonTag">
                        <button type="button" className="btn btn-success botn start" onClick={startButton}>Start</button>
                        <button type="button" className="btn btn-secondary botn reset" onClick={resetButton}>Reset</button>
                    </div> : ""
                }               

            </div>
        </div>
    )
}

export default StopWatch;