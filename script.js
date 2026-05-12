script.js
// Select video and audio elements
const video = document.querySelector("video");
const audio = document.querySelector("audio");

// Example: Alert when video starts playing
video.addEventListener("play", () => {
  alert("Video is now playing!");
});

// Example: Alert when audio ends
audio.addEventListener("ended", () => {
  alert("Audio has finished playing.");
});
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
