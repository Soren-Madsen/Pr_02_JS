


const btn_play = document.getElementById("btn_play");
const btn_stop = document.getElementById("btn_stop");
const btn_pause = document.getElementById("btn_pause");
const btn_mute = document.getElementById("btn_mute");
const btn_volume_up = document.getElementById("btn_volume_up");
const btn_volume_down = document.getElementById("btn_volume_down");
const audio = document.getElementById("audioElement");
const select_music = document.getElementById("select_music");
const inp_vol_audio = document.getElementById("inp_vol_audio");

let audio_actual = "";

btn_play.style.backgroundColor = "orange";
btn_play.onclick = playMusic;
btn_stop.onclick = stopMusic;
btn_pause.onclick = pauseMusic;
btn_volume_up.onclick = volumeUp;
btn_volume_down.onclick = volumeDown;
btn_mute.onclick = mute;
inp_vol_audio.onchange = inp_vol_audio;



function playMusic() {
    let select_music = document.getElementById("select_music");
    if (audio_actual != select_music.value) {
        audio.src = select_music.value;
        audio_actual = select_music.value;
    }
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

function volumeUp() {
    if (audio.volume <= 0.9) {
        audio.volume += 0.1;
    }
    inp_vol_audio.value = audio.volume;
}

function volumeDown() {
    if (audio.volume >= 0.1) {
        audio.volume -= 0.1;
    }
    inp_vol_audio.value = audio.volume;
}

function inp_vol_audio() {
    audio.volume = inp_vol_audio.value;
}

function mute() {
    audio.muted = !audio.muted;
}
