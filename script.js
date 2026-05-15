script.js
// Video controls
const video = document.getElementById("myVideo");
document.getElementById("playVideo").addEventListener("click", () => video.play());
document.getElementById("pauseVideo").addEventListener("click", () => video.pause());

// Audio controls
const audio = document.getElementById("myAudio");
document.getElementById("playAudio").addEventListener("click", () => audio.play());
document.getElementById("pauseAudio").addEventListener("click", () => audio.pause());

// Volume control
document.getElementById("volumeControl").addEventListener("input", (e) => {
  audio.volume = e.target.value;
});
