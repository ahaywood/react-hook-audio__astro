import React, { useRef } from "react";
import { useAudioPlayer } from "react-hook-audio";

interface SimplePlayerProps {
  track: string;
}

const calculateTime = (secs: number): string => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

const SimplePlayer = ({ track }: SimplePlayerProps) => {
  // references
  const audioPlayer = useRef<HTMLAudioElement>(null); // set up reference for the audio component
  const progressBar = useRef<HTMLInputElement>(null); // reference for the progress bar

  const {
    backThirty,
    changeAudioToPlayhead,
    changePlaybackSpeed,
    currentTime,
    duration,
    forwardThirty,
    isPlaying,
    onLoadedMetadata,
    play,
    skipToTime,
    speed,
    tapSpaceBar,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);
  return (
    <div>
      <audio
        ref={audioPlayer}
        src={track}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
      />

      <div className="controls">
        <div>
          <button
            className="playPause"
            onClick={togglePlaying}
            onKeyPress={tapSpaceBar}
            type="button"
          >
            {isPlaying ? (
              <svg
                width="24"
                height="29"
                viewBox="0 0 24 29"
                xmlns="http://www.w3.org/2000/svg"
                className="pause"
              >
                <rect width="9" height="29" />
                <rect x="15" width="9" height="29" />
              </svg>
            ) : (
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                xmlns="http://www.w3.org/2000/svg"
                className="play"
              >
                <path d="M25.1045 14.8922L0.949477 0.539171L0.949472 29.2453L25.1045 14.8922Z" />
              </svg>
            )}
          </button>
        </div>
        <div className="current-time">{calculateTime(currentTime)}</div>
        <div className="range-wrapper">
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            ref={progressBar}
            onChange={changeAudioToPlayhead}
          />
        </div>
        <div className="duration">{calculateTime(duration)}</div>
      </div>
    </div>
  );
};

export { SimplePlayer };
