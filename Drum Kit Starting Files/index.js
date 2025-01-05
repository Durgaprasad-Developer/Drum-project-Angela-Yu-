let soundKey = {
    w:"sounds/crash.mp3",
    a:"sounds/kick-bass.mp3",
    s:"sounds/snare.mp3",
    d:"sounds/tom-1.mp3",
    j:"sounds/tom-2.mp3",
    k:"sounds/tom-3.mp3",
    l:"sounds/tom-4.mp3"
}
function playSound(key){
    let audioFile = soundKey[key];
    if(audioFile){
        let audio = new Audio(audioFile);
        audio.play();
        buttonAnimation(key);
    }else{
        console.log("no audio for this");
    }
}
document.querySelectorAll(".drum").forEach(button =>{
    button.addEventListener("click",()=>{
        let key = button.classList[0];
        playSound(key);
    })
})
document.addEventListener("keydown",(event)=>{
    playSound(event.key);
})

function buttonAnimation(key){
    let button = document.querySelector(`.${key}`);
    if(button){
        button.classList.add("pressed");
    }

    setTimeout(()=>{
        button.classList.remove("pressed");
    },100);
}