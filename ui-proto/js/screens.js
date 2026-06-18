let currentScreen="start";


function showScreen(id){


    const current =
    document.getElementById(currentScreen);



    const next =
    document.getElementById(id);



    if(!next)
    return;



    if(current){

        current.classList.remove("active");

    }



    next.classList.add("active");



    currentScreen=id;



    initIcons();


}



function goBack(){


    const previous={


        editor:"start",

        cut:"editor",

        text:"editor",

        export:"editor"


    };


    if(previous[currentScreen]){


        showScreen(
            previous[currentScreen]
        );


    }


}
