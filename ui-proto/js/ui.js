function initIcons(){


    document
    .querySelectorAll("[data-icon]")
    .forEach(icon=>{


        const name =
        icon.dataset.icon;



        const lucideName =
        window.APP_ICONS[name] || name;



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




function initLabels(){


    document
    .querySelectorAll("[data-label]")
    .forEach(element=>{


        const key =
        element.dataset.label;



        const value =
        window.APP_LABELS[key];



        if(value){


            element.textContent =
            value;


        }


    });


}





document.addEventListener(
"DOMContentLoaded",
()=>{


    initIcons();


    initLabels();



    



});
