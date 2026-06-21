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


    }else{


        app.classList.remove(
            "start-mode"
        );


    }

}





function showScreen(id){


    const current =
    document.getElementById(currentScreen);



    const next =
    document.getElementById(id);



    if(!next)
        return;



    if(current){

        current.classList.remove(
            "active"
        );

    }



    next.classList.add(
        "active"
    );



    currentScreen = id;



    updateLogo(id);



    if(window.initIcons){

        initIcons();

    }


}





function goBack(){


    const previous = {


        format:"start",

        editor:"format",

        export:"editor" "


    };



    if(previous[currentScreen]){


        showScreen(
            previous[currentScreen]
        );


    }


}

function selectFormat(format){

    console.log("format:", format);

    showScreen("editor");

}


function selectLayer(layer){

    console.log("active layer:", layer);

}
