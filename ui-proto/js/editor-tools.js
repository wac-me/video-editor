let activeTool = "add";


function hideToolPanels(){

    document
    .querySelectorAll(".tool-panel")
    .forEach(panel=>{

        panel.classList.remove("active");

    });

}

// remove class timeline 

function activateTimeline(){

    const editor =
        document.getElementById("editor");


    if(!editor) return;


    // przechodzimy z pustego projektu

    editor.classList.remove(
        "empty-project"
    );



    // chowamy ADD MEDIA

    const emptyAdd =
    document.getElementById(
        "emptyEditorAdd"
    );


    if(emptyAdd){

        emptyAdd.style.display="none";

    }



    // pokazujemy toolbar

    const tools =
    document.querySelector(
        ".tools"
    );


    if(tools){

        tools.style.display="block";

    }



    console.log(
        "timeline activated"
    );

}

function setActiveToolButton(type){

    document
    .querySelectorAll("#addTools .tool-btn")
    .forEach(btn=>{
        btn.classList.remove("active");
    });


    const btn =
    document.querySelector(
        `[data-tool="${type}"]`
    );


    if(btn){
        btn.classList.add("active");
    }

}

// SETTINGS PANEL

function openSettings(type){

    const panel = document.getElementById("settingsPanel");


    if(!panel){
        console.log("settingsPanel missing");
        return;
    }


    panel.classList.add("active");


    const title =
    document.getElementById("settingsTitle");


    if(title){
        title.innerText = type.toUpperCase();
    }


    console.log("open settings:", type);

}



function closeSettings(){

    const panel =
    document.getElementById("settingsPanel");


    if(panel){

        panel.classList.remove("active");

    }

}



function confirmSettings(){

    closeSettings();

}



window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.confirmSettings = confirmSettings;

function openEditorTool(type){

    setActiveToolButton(type);


    document
    .querySelectorAll("#editor .tool-panel")
    .forEach(panel=>{

        panel.classList.remove("active");

    });


    const panel =
    document.getElementById(type + "Tools");


    if(panel){

        panel.classList.add("active");

    }

}



function hideEditorTools(){

    document
    .querySelectorAll("#editor .tool-panel")
    .forEach(panel=>{

        panel.classList.remove("active");

    });


    // wracamy do ADD toolbar

    const addTools =
    document.getElementById("addTools");


    if(addTools){

        addTools.classList.add("active");

    }

}



function confirmEditorTool(){

    hideEditorTools();

}



function cancelEditorTool(){

    hideEditorTools();

}



window.openEditorTool = openEditorTool;
window.confirmEditorTool = confirmEditorTool;
window.cancelEditorTool = cancelEditorTool;
window.setActiveToolButton = setActiveToolButton;