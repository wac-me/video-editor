function initIcons(){


    document
    .querySelectorAll("[data-icon]")
    .forEach(icon=>{


        const name =
        icon.dataset.icon;



        const lucideName =
        window.APP_ICONS[name];



        if(lucideName){


            icon.setAttribute(
                "data-lucide",
                lucideName
            );


        }


    });



    if(window.lucide){

        lucide.createIcons();

    }

}




document.addEventListener(
"DOMContentLoaded",
()=>{


    initIcons();



    const upload =
    document.querySelector(".upload");



    if(upload){


        upload.onclick=()=>{


            showScreen("editor");


        };


    }



});