function openSettings(type){


const panel =
document.getElementById("settingsPanel");


if(!panel) return;



panel.classList.add("active");



if(type==="speed"){


panel.innerHTML = `

<div class="settings-box">

<h3>Speed</h3>


<input 
type="range"
min="0.5"
max="2"
step="0.1"
value="1">


</div>

`;


}



}



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