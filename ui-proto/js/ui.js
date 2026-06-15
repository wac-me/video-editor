let currentScreen="start";


function showScreen(id){


const current =
document.getElementById(currentScreen);


const next =
document.getElementById(id);



if(!next || currentScreen===id)
return;



current.classList.remove("active");



setTimeout(()=>{

next.classList.add("active");

},100);



currentScreen=id;


}





document.querySelector(".upload")
.onclick=()=>{


showScreen("editor");


};





window.onload=()=>{


if(window.lucide){

lucide.createIcons();

}


};