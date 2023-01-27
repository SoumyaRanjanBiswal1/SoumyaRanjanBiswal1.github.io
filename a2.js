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
playButton.addEventListener("click", function() {
    song.play();
});




// Please note that the code above assumes that you have a bird image with the name bird.png in the same directory as your HTML file and a song file with the name song.mp3 in the same directory as your HTML file. Also, this is an example, you will have to use your own image and song files to make it work.

// You would also have to make sure that the css and javascript files are linked properly in the HTML file.

// Also, if you want the animation of flying bird which can be achieved by some library like Anime.js or a self-written animation.
