let currentScreen = "start";



function initIcons(){

    if(window.lucide){

        lucide.createIcons();

        console.log(
            "LUCIDE OK"
        );

    }
    else{

        console.log(
            "LUCIDE NOT READY"
        );

    }

}




function goBack(){

    if(currentScreen !== "start"){

        showScreen("editor");

    }

}





function updateLogo(screen){


    const app =
        document.querySelector(".app");



    if(!app)
        return;



    if(screen === "start"){

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


    const current =
        document.getElementById(
            currentScreen
        );



    const next =
        document.getElementById(
            id
        );



    if(!next || currentScreen === id)
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



    // odświeżenie ikon Lucide

    setTimeout(()=>{

        initIcons();

    },100);



}





document.addEventListener(
"DOMContentLoaded",
()=>{


    updateLogo(
        "start"
    );


    initIcons();




    const upload =
        document.querySelector(
            ".upload"
        );



    if(upload){


        upload.onclick=()=>{


            showScreen(
                "editor"
            );


        };


    }



});