console.log("Welcome to audiolite");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('progress');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"Mehrama",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"Shayad",filepath:"2.mp3",coverPath:"cover2.jpg"},
    {songName:"Apna Bana le",filepath:"3.mp3",coverPath:"cover3.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress)
    myProgressBar.value= progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{


})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays()
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=2){
        songIndex=0
    }else{
        songIndex+=1;

    }
    audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex-=1;

    }
    audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
})