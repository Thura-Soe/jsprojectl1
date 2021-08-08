// UI 

const musicconatiner = document.getElementById("music-container");

const title = document.getElementById("title"),
    progresscontainer = document.getElementById("progress-container"),
    progress = document.getElementById("progress");

const audio = document.getElementById("audio");

const cover = document.getElementById("cover");

const prevbtn = document.getElementById("prev"),
    playbtn = document.getElementById("play"),
    nextbtn = document.getElementById("next");


let songindex = 0;

const songs = ['sample1', 'sample2', 'sample3'];

// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){

    // console.log(music);

    title.textContent = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`
}

// Event LIstener for Play / Pause
playbtn.addEventListener('click', ()=>{
    
    const isplaying = musicconatiner.classList.contains("play");

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }

});

function playsong(){
    musicconatiner.classList.add("play");
    playbtn.querySelector("i.fas").classList.remove("fa-play");
    playbtn.querySelector("i.fas").classList.add("fa-pause");
    audio.play();

    // console.log(audio.duration);
    
}

function pausesong(){
    musicconatiner.classList.remove("play")
    playbtn.querySelector("i.fas").classList.remove("fa-pause");
    playbtn.querySelector("i.fas").classList.add("fa-play");
    audio.pause();

}

