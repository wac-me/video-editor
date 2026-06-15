let currentScreen = "start";

function goBack(){

    showScreen("editor");

}


function showScreen(id){

    const current =
        document.getElementById(currentScreen);


    const next =
        document.getElementById(id);



    if(!next || currentScreen === id)
        return;



    current.classList.remove("active");


    setTimeout(()=>{

        next.classList.add("active");

    },50);



    currentScreen = id;

}





document.addEventListener(
"DOMContentLoaded",
()=>{


    const upload =
        document.querySelector(".upload");



    if(upload){


        upload.onclick = ()=>{


            showScreen("editor");


        };


    }



});