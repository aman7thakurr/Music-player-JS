const aud = document.getElementById('aud')
var audio = new Audio("./assets/powfu-death-bed.mp3")
const btn = document.querySelector('.botón')
const volumecontroller = document.getElementById("volumecontroller")

function playPause(){
    if(btn.className =='botón active'){  

  
    audio.play();
}
else{


    audio.pause();
}}
volumecontroller.addEventListener('input',()=>{
    HTMLMediaElement.volume = volumecontroller.value/100
})
console.log(volumecontroller.value)
const player = document.querySelector('.fake-player');

function clickHandler () { 
    const buttons = Array.from(this.children);
    buttons.forEach(button => button.classList.toggle('hidden'))
    if(buttons.classList.toggle('hidden')){
        pauseAud()
    }
};
 
player.addEventListener('click', clickHandler);

function playAud(s){
    var song = new Audio(s)
    console.log(song);
song.play()
}