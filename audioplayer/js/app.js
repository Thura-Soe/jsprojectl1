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

// Change Song 
prevbtn.addEventListener("click", prvioussong);
nextbtn.addEventListener("click", nextsong);


// Previous Song 
function prvioussong(){
    // console.log('hay');
    songindex--;
    // songindex -= 1;

    if(songindex < 0){
        songindex = songs.length - 1;
    }

    // console.log(songindex);
    loadsong(songs[songindex]);
    playsong();
}

// Next Song 
function nextsong(){
    // console.log('hay');

    // songindex++;
    songindex += 1;
    if(songindex > songs.length -1 ){
        songindex = 0;
    }
    // console.log(songindex);

    loadsong(songs[songindex]);
    playsong();
}

// Time Play and Stop Update 
audio.addEventListener('timeupdate', updateprogress);


// Update Progress Bar 
function updateprogress(e){

    // console.log(audio.currentTime);
    // console.log(audio.durationp);

    // Method 1
    // const progresspercent = (audio.currentTime / audio.duration) * 100;
    // console.log(progresspercent);
    // progress.style.width = `${progresspercent}%`;

    // Method 2
    // const currenttime = e.target.currentTime;
    // const duration = e.target.duration;
    // const progresspercent = (currenttime / duration) * 100;
    // progress.style.width = `${progresspercent}%`;

    // Method 3
    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // const progresspercent = (currentTime / duration) * 100;
    // progress.style.width = `${progresspercent}%`;

    // Method 4
    const {currentTime, duration} = e.target;
    const progresspercent = (currentTime / duration) * 100;
    progress.style.width = `${progresspercent}%`;

}

// Click on Progress Bar 
progresscontainer.addEventListener('click', setprogress);

// Set Progress Bar 
function setprogress(e){
    // console.log(e.target);

    const width = e.target.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);
    const duration = audio.duration;

    audio.currentTime = (clickx / width) * duration;
}

// Song End 
audio.addEventListener('ended', nextsong);
