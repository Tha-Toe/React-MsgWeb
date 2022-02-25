import React, { useState,useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBackwardStep,faPlay,faPause,faForwardStep} from '@fortawesome/free-solid-svg-icons'
import "./music.css"

const MusicTag = ({id,title,playSong}) => {
    return (
        <div className="musicTag" onClick={() => playSong(id)} >{id}. {title}</div>
    )
}

function MusicPlay () {

    const [song] = useState([
        {id: 1 , src : "https://github.com/Tha-Toe/Tha-Toe/raw/main/track1.mp3", title : "Attention"},
        {id: 2 , src : "https://github.com/Tha-Toe/Tha-Toe/raw/main/track2.mp3", title : "I need you baby"},
        {id: 3 , src : "https://github.com/Tha-Toe/Tha-Toe/raw/main/track3.mp3", title : "Talking to the Moon"},
        {id: 4 , src : "https://github.com/Tha-Toe/Tha-Toe/raw/main/track4.mp3", title : "Bella Porah Build a bitch.."},
        {id: 5 , src : "https://github.com/Tha-Toe/Tha-Toe/raw/main/track5.mp3", title : "Image dragon Believer"},
    ])
    const [currentSongIndex,setCurrentSongIndex] = useState(1)
    const [currentPlayingIndex,setCurrentPlayingIndex] = useState(false);
    const [duration,setDuration] = useState("00:00");
    const [currentTime,setCurrentTime] = useState("00:00");
    const [currentProgressWidth,setCurrentProgressWidth] = useState("0px");

    

    const playSong = (id) => {
        setCurrentSongIndex(id);
        setCurrentPlayingIndex(true);
    }

    const skipSong = (forward) => {
        if (forward) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp ++;
                if(temp > song.length) {
                    temp = 1;
                }
                return temp;
            })
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp --;
                if(temp < 1) {
                    temp = song.length;
                }
                return temp;
            })
        }
    }

    const audioEl = useRef(null);



    /*useEffect(() => {
        const totalSeconds = Math.floor(audioEl.current.duration)
        setDuration(totalSeconds);
    },[audioEl?.current?.loadedmetadata,audioEl?.current?.readyState])*/
    const [totalSecondsForProgress,setTotalSecondsForProgress] = useState("");
    
    
    const getDuration = (event) => {
        const totalSeconds = Math.floor(event);
        setTotalSecondsForProgress(totalSeconds);
        const totalTime = createMinutesAndSecondsText(totalSeconds);
        setDuration(totalTime);
    }


    const currentSeconds = (e) => {
        const currSeconds = Math.floor(e);
        const currTime = createMinutesAndSecondsText(currSeconds);
        setCurrentTime(currTime);
        currentProgressTag(currSeconds);
    }
    
    const currentProgressTag = (currSeconds) => {
        const currentProgressAmonut = (400 / totalSecondsForProgress) * currSeconds;
        const currentProgressPx = currentProgressAmonut.toString() + "px";
        setCurrentProgressWidth(currentProgressPx);
    }

    const createMinutesAndSecondsText = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds/60)
        const seconds = Math.floor(totalSeconds%60)

        const minutesText = minutes<10 ? "0" + minutes.toString() : minutes;
        const secondsText = seconds<10 ? "0" + seconds.toString() : seconds;

        return minutesText + ":" + secondsText
    }




    useEffect(() => {
        if (currentPlayingIndex) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    })



    return (
        <div className="musicContainer">
            <div>
                {song.map((sng) => <MusicTag key={sng.id} id={sng.id} src = {sng.src} title = {sng.title} playSong = {playSong}/>)}
            </div>
            <audio src = {song[currentSongIndex-1].src} 
                    ref = {audioEl}
                    onLoadedData = {(e) => {
                        getDuration(e.currentTarget.duration);
                    }}
                    onTimeUpdate = {(e) => {
                        currentSeconds(e.currentTarget.currentTime);
                    }}
            >
            </audio>
            <div className="duration">{currentTime}/{duration}</div>
            <div className="progressBar">
                <div className = "currentProgressBar" 
                style={{width : `${currentProgressWidth}`}}>
                </div>
            </div>
            <div className="controls">
            <FontAwesomeIcon icon={faBackwardStep} onClick = {() => skipSong(false)}/>
            {currentPlayingIndex!==true?  <FontAwesomeIcon icon={faPlay} onClick = {() => setCurrentPlayingIndex(!currentPlayingIndex)} /> : <FontAwesomeIcon icon={faPause} onClick = {() => setCurrentPlayingIndex(!currentPlayingIndex)} />}
            <FontAwesomeIcon icon={faForwardStep} onClick = {() => skipSong(true)}/>
            </div>
        </div>
    )
}

export default MusicPlay;