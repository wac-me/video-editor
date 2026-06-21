let activeTool = "add";


function hideToolPanels(){

    document
    .querySelectorAll(".tool-panel")
    .forEach(panel=>{

        panel.classList.remove("active");

    });

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



function openEditorTool(type){

    setActiveToolButton(type);

    showScreen(type);

}



function confirmEditorTool(){

    showScreen('editor');

}



function cancelEditorTool(){

    showScreen('editor');

}



window.openEditorTool = openEditorTool;
window.confirmEditorTool = confirmEditorTool;
window.cancelEditorTool = cancelEditorTool;
window.setActiveToolButton = setActiveToolButton;