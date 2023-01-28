const popup = document.querySelector("#popup");
const playButton = document.querySelector("#play-button");
const song = document.querySelector("#song");


// Show the "Surprise!" pop-up when the page loads
window.onload = function() {
    popup.style.display = "flex";
}
popup.addEventListener("click",function(){
    popup.style.display="none";
})

// Play the song when the play button is clicked
var i=0;
playButton.addEventListener("click", function() {
    if(i==0)
    {
        i=1;
        playButton.innerHTML="Pause";
    song.play();
    }
    else
    {
        i=0;
        playButton.innerHTML="Play";
        song.pause();
    }
});