const startBtn = document.getElementById("startBtn");
const audio = document.getElementById("preview");

let stream;
let recorder;
let audioFile;
let recording;

// Common Function
const downloadBtnProperty = () => {
  startBtn.innerText = "Download";
  startBtn.style.backgroundColor = "gold";
};

const handleDownload = () => {
  const a = document.createElement("a");
  a.href = audioFile;
  a.download = "MyRecording.webm";
  document.body.appendChild(a);
  a.click();
};

const handleStop = () => {
  downloadBtnProperty();
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);

  clearTimeout(recording);
  recorder.stop();
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.style.backgroundColor = "tomato";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);

  recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
  recorder.ondataavailable = (event) => {
    audioFile = URL.createObjectURL(event.data);
    audio.srcObject = null;
    audio.src = audioFile;
    audio.loop = true;
    audio.setAttribute("controls", "");
    audio.controls = true;
    audio.play();
    downloadBtnProperty();
  };
  recorder.start();
  recording = setTimeout(() => {
    recorder.stop();
  }, 5000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  audio.srcObject = stream;
  audio.play();
};

init();
startBtn.addEventListener("click", handleStart);
