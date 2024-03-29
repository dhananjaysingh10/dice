var random1=Math.floor(Math.random()*6)+1;
//console.log(random1);
var img1=document.querySelector(".img1");

img1.src="./images/dice"+random1+".png";

var random2=Math.floor(Math.random()*6)+1;
//console.log(random1);
var img2=document.querySelector(".img2");

img2.src="./images/dice"+random2+".png"; 

document.querySelector("h1").innerText;



if(random1==random2){
    document.querySelector("h1").innerText="🟰 It's A Tie 🟰";
}
else if(random1>random2){
    document.querySelector("h1").innerText="👈 Player 1 Wins!";

}
else{
    document.querySelector("h1").innerText="Player 2 Wins! 👉";

}
function refreshpage() {
    location.reload(); // Reloads the current document
}
