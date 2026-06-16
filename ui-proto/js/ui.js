import { icons } from "./icons.js";

let currentScreen="start";

function initIcons(){


document
.querySelectorAll("[data-icon]")
.forEach(icon=>{


const name =
icon.dataset.icon;


if(icons[name]){


icon.setAttribute(
"data-lucide",
icons[name]
);


}


});


if(window.lucide){

    lucide.createIcons();

}


}

function updateLogo(screen){


const app=document.querySelector(".app");


if(screen==="start"){

app.classList.add(
"start-mode"
);

}
else{

app.classList.remove(
"start-mode"
);

}


}




function showScreen(id){


const current=
document.getElementById(currentScreen);


const next=
document.getElementById(id);



if(!next)
return;



if(current){

current.classList.remove(
"active"
);

}



setTimeout(()=>{


next.classList.add(
"active"
);


},50);



currentScreen=id;


updateLogo(id);



if(window.lucide){

lucide.createIcons();

}


}





function goBack(){


if(currentScreen!=="start"){

showScreen("editor");

}

}




document.addEventListener(
"DOMContentLoaded",
()=>{

initIcons();

updateLogo(
"start"
);



if(window.lucide){

lucide.createIcons();

}



const upload=
document.querySelector(".upload");



if(upload){


upload.onclick=()=>{


showScreen("editor");


};


}



});