const video = document.querySelector("video");
const videoController = document.getElementById("videoController");
const psBtn = videoController.querySelector("#playPauseBtn");
const volumeBtn = videoController.querySelector("#volume");
const volumeRange = videoController.querySelector("#volumeRange");
const timeline = videoController.querySelector("#timeline");
const currentTIme = videoController.querySelector("#currentTIme");
const totalTime = videoController.querySelector("#totalTime");
const fullScreenBtn = videoController.querySelector("#fullScreen");

let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    psBtn.className = "fas fa-pause";
  } else {
    video.pause();
    psBtn.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtn.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtn.className = "fas fa-volume-off";
  } else {
    volumeBtn.className = "fas fa-volume-up";
  }
  video.volume = volumeValue = value;
};

const formatTime = (senconds) =>
  new Date(senconds * 1000).toISOString().substring(14, 19);

const handleLoadedData = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  currentTIme.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};

const handleTimeline = (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
  handleTimeUpdate();
};

const enterFullScreen = () => {
  document.exitFullscreen();
  fullScreenBtn.classList = "fas fa-expand";
};

const exitFullScreen = () => {
  video.requestFullscreen();
  fullScreenBtn.classList = "fas fa-compress";
};

const handleFullscreen = () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    enterFullScreen();
  } else {
    exitFullScreen();
  }
};

const handleKeyControl = (event) => {
  if (event.keyCode === 32) {
    handlePlayAndStop();
  } else if (event.keyCode === 70) {
    video.requestFullscreen();
  } else if (event.keyCode === 27) {
    document.exitFullscreen();
  }
};

video.addEventListener("loadedmetadata", handleLoadedData);
video.addEventListener("timeupdate", handleTimeUpdate);
timeline.addEventListener("input", handleTimeline);
psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);
fullScreenBtn.addEventListener("click", handleFullscreen);
window.addEventListener("keydown", handleKeyControl);
