const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");

let videoVolume = 0.5;
video.volume = videoVolume;

const handlePlayClick = () => {
  video.paused ? video.play() : video.pause();
  playBtn.innerText = video.paused ? "Play" : "Pause";
};

const handleMuteClick = () => {
  video.muted = video.muted ? false : true;
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
};

const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  videoVolume = value;
};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
volumeRange.addEventListener("input", handleVolumeChange);
