let currentScreen = "start";

let screenHistory = [];



function showScreen(id){


    const current =
        document.getElementById(currentScreen);


    const next =
        document.getElementById(id);



    if(!next || currentScreen === id){

        return;

    }



    // zapamiętaj poprzedni ekran

    screenHistory.push(currentScreen);



    if(current){

        current.classList.remove("active");

    }



    setTimeout(()=>{


        next.classList.add("active");


    },50);



    currentScreen = id;


}






function goBack(){


    if(screenHistory.length === 0){

        return;

    }



    const previous =
        screenHistory.pop();



    const current =
        document.getElementById(currentScreen);



    const next =
        document.getElementById(previous);



    if(current){

        current.classList.remove("active");

    }



    setTimeout(()=>{


        if(next){

            next.classList.add("active");

        }


    },50);



    currentScreen = previous;


}







const upload =
document.querySelector(".upload");



if(upload){


    upload.onclick = ()=>{


        showScreen("editor");


    };


}







window.addEventListener(
"load",
()=>{


    if(window.lucide){


        lucide.createIcons();


        console.log(
            "LUCIDE OK"
        );


    }
    else{


        console.log(
            "LUCIDE NOT LOADED"
        );


    }


});