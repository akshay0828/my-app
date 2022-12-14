import React from "react";
import { useRef } from "react";
import "./App.css";
import ReactPlayer from "react-player";

import video from "./video.mp4";
import useVideoPlayer from "./useVideoPlayer";

const About=()=>{
    const videoElement = useRef(null);
    const {
      playerState,
      togglePlay,
      handleOnTimeUpdate,
      handleVideoProgress,
      handleVideoSpeed,
      toggleMute,
    } = useVideoPlayer(videoElement);
    return(
        <div className="container">
        <div className="video-wrapper">
        {/* <ReactPlayer width='480px' height='280px'controls  url='video.mp4 '/> */}
          <video
            src={video}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
          <div className="controls">
            <div className="actions">
              <button onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <i className="bx bx-play"></i>
                ) : (
                  <i className="bx bx-pause"></i>
                )}
                Play/Pause
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
            <select
              className="velocity"
              value={playerState.speed}
              onChange={(e) => handleVideoSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button className="mute-btn" onClick={toggleMute}>
              {!playerState.isMuted ? (
                <i className="bx bxs-volume-full"></i>
              ) : (
                <i className="bx bxs-volume-mute"></i>
              )}

              Audio mute
            </button>
          </div>
        </div>
      </div>
    );
}
export default About