let currentScreen = "start";





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








function updateActiveButton(screen){


    document
    .querySelectorAll(".tool-btn")
    .forEach(btn=>{


        btn.classList.remove(
            "active"
        );


    });



    const btn =
        document.querySelector(
            `.tool-btn[onclick*="${screen}"]`
        );



    if(btn){

        btn.classList.add(
            "active"
        );

    }


}








function goBack(){


    if(
        currentScreen !== "start"
    ){

        showScreen(
            "editor"
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


    updateActiveButton(id);


}









document.addEventListener(
"DOMContentLoaded",
()=>{


    updateLogo(
        "start"
    );


    if(window.lucide){

        lucide.createIcons();

    }



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