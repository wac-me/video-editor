function openSettings(type){


const panel =
document.getElementById("settingsPanel");


if(!panel) return;



panel.classList.add("active");



if(type==="speed"){


document
.getElementById("settingsTitle")
.textContent = "SPEED";


document
.getElementById("settingsContent")
.innerHTML = `

<div class="settings-box">

<input 
type="range"
min="0.5"
max="2"
step="0.1"
value="1">

</div>

`;


function closeSettings(){

const panel =
document.getElementById("settingsPanel");


if(panel){

panel.classList.remove("active");

panel.innerHTML="";

}

}



window.openSettings=openSettings;
window.closeSettings=closeSettings;