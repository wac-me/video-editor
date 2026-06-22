let currentSetting = null;



function openSettings(type){


    const panel =
    document.getElementById("settingsPanel");


    if(!panel){

        console.log("settingsPanel not found");

        return;

    }



    currentSetting = type;



    panel.classList.add("active");



    const title =
    document.getElementById("settingsTitle");


    if(title){

        title.textContent =
        type.toUpperCase();

    }


}



function closeSettings(){


    const panel =
    document.getElementById("settingsPanel");


    if(panel){

        panel.classList.remove("active");

    }



    currentSetting = null;


}



function confirmSettings(){


    console.log(
        "confirm setting:",
        currentSetting
    );


    closeSettings();


}



window.openSettings = openSettings;

window.closeSettings = closeSettings;

window.confirmSettings = confirmSettings;