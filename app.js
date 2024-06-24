const aud = document.getElementById("aud");
var audio = new Audio("./assets/powfu-death-bed.mp3");
var btn = document.querySelector(".botón");
const volumecontroller = document.getElementById("volumecontroller");
let curr_time = document.querySelector(".curr_time");
let total_duration = document.querySelector(".total_duration");
let volumevalue = document.querySelector(".volumevalue");
// const nextTrack = document.getElementById('nextTrack')
// const prevTrack = document.getElementById('previoustrack')

let timerId = null;

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;
function timer() {
  msec++;

  if (msec == 100) {
    msec = 0;
    secs++;

    if (secs == 60) {
      secs = 0;
      mins++;
    }
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    // console.log(mins,secs)
    curr_time.textContent = `${minsString} : ${secsString}`;
  }
}
volumevalue.textContent = volumecontroller.value;
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";

volumecontroller.addEventListener("change", () => {
  volumevalue.textContent = volumecontroller.value;
});

const songs = [
  {
    name: "Coldplay - Hymn For The Weekend",
    src: "/assets/Coldplay - Hymn For The Weekend.mp3",
    img: "./assets/softly.jpg",
  },
  {
    name: "Coldplay - A Sky Full Of Stars",
    src: "/assets/Coldplay - A Sky Full Of Stars.mp3",
    img: "./assets/softly.jpg",
  },

  {
    name: "Ma Belle - AP Dhillon",
    src: "./assets/Ma Belle.mp3",
    img: "./assets/softly.jpg",
  },

  {
    name: "Anuv Jain - HUSN",
    src: "./assets/Anuv Jain - HUSN.mp3",
    img: "./assets/softly.jpg",
  },
  {
    name: "softly",
    src: "./assets/SOFTLY.mp3",
    img: "./assets/softly.jpg",
  },
  {
    name: "Pehle Bhi Main",
    src: "/assets/Pehle Bhi Main.mp3",
    img: "./assets/softly.jpg",
  },
  {
    name: "TU HAI KAHAN",
    src: "./assets/AUR - TU HAI KAHAN.mp3",
    img: "./assets/softly.jpg",
  },
  {
    name: "powfu-death-bed",
    src: "./assets/powfu-death-bed.mp3",
    img: "./assets/img.avif",
    length: "",
  },
];

function playPause() {
  if (curr_time.textContent == total_duration.textContent) {
    clearInterval(timerId);
  }
  if (btn.className == "botón active") {
    audio.play();
    total_duration.textContent = "02:53";

    if (timerId !== null || total_duration.textContent == "02:53") {
      clearInterval(timerId);
    }
    timerId = setInterval(timer, 10);
  } else {
    audio.pause();
    clearInterval(timerId);
  }
  
}
volumecontroller.addEventListener("input", () => {
  HTMLMediaElement.volume = volumecontroller.value / 100;
  const volV = document.querySelector(".volVal");
  // const newDivText = document.createTextNode(inp.value)
});
// console.log(volumecontroller.value)
const player = document.querySelector(".fake-player");

function clickHandler() {
  const buttons = Array.from(this.children);
  buttons.forEach((button) => button.classList.toggle("hidden"));
  if (buttons.classList.toggle("hidden")) {
    pauseAud();
  }
}

// player.addEventListener('click', clickHandler);

function playAud(s) {
  if ((btn.className = "botón")) {
    // s = songs[0].src
    console.log(s);
    var song = new Audio(s);

    // console.log(song);

    btn = document.querySelector(".botón");
    btn.className = "botón active";
    song.play();

    console.log(btn.className);
    // console.log(count)
  } else {
    btn.className = "botón";
    song.pause();
  }
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function nextTrack() {
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

/*
function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();
  
    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
  
    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
  }
  
 
 
  loadTrack(track_index);
  
  function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
  }
  
  function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
  
  function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
  }
  
  
  
  function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
  }
  
  function setVolume() {
    curr_track.volume = volume_slider.value / 100;
  }
  
  function seekUpdate() {
    let seekPosition = 0;
  
    if (!isNaN(curr_track.duration)) {
      seekPosition = curr_track.currentTime * (100 / curr_track.duration);
  
      seek_slider.value = seekPosition;
  
      let currentMinutes = Math.floor(curr_track.currentTime / 60);
      let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(curr_track.duration / 60);
      let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
  
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }*/
