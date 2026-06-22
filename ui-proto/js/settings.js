let currentSetting = null;


function openSettings(type){


    const panel =
    document.getElementById("settingsPanel");


    if(!panel) return;



    currentSetting = type;



    panel.classList.add("active");



    const app =
    document.querySelector(".app");


    if(app){

        app.classList.add("settings-open");

    }



    const title =
    document.getElementById("settingsTitle");


    const content =
    document.getElementById("settingsContent");



    if(title){

        title.textContent =
        type.toUpperCase();

    }



    if(!content) return;



    switch(type){


        case "speed":


            content.innerHTML = `

            <div class="settings-box">


                <h3>Speed</h3>


                <input 
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value="1">


            </div>

            `;

        break;



        case "adjust":


            content.innerHTML = `

            <div class="settings-box">

                <h3>Adjust</h3>

                <button class="setting-action">
                    Brightness
                </button>


                <button class="setting-action">
                    Contrast
                </button>


            </div>

            `;

        break;



        case "fx":


            content.innerHTML = `

            <div class="settings-box">

                <h3>FX</h3>

                <button class="setting-action">
                    Add effect
                </button>

            </div>

            `;

        break;



        default:


            content.innerHTML = `

            <div class="settings-box">

                <h3>${type}</h3>

            </div>

            `;


    }


}



function closeSettings(){


    const panel =
    document.getElementById("settingsPanel");



    if(panel){

        panel.classList.remove("active");

    }



    const app =
    document.querySelector(".app");


    if(app){

        app.classList.remove("settings-open");

    }



    currentSetting = null;


}




function confirmSettings(){

    closeSettings();

}





window.openSettings = openSettings;

window.closeSettings = closeSettings;

window.confirmSettings = confirmSettings;