let activeTool = "add";


function hideToolPanels(){

    document
    .querySelectorAll(".tool-panel")
    .forEach(panel=>{

        panel.classList.remove("active");

    });

}



function openEditorTool(type){


    hideToolPanels();



    const panel =
    document.getElementById(type+"Tools");



    if(panel){

        panel.classList.add("active");

    }


    activeTool = type;



}



function closeEditorTool(){


    hideToolPanels();


    const add =
    document.getElementById("addTools");


    if(add){

        add.classList.add("active");

    }


    activeTool="add";


}



function confirmEditorTool(){

    closeEditorTool();

}



function cancelEditorTool(){

    closeEditorTool();

}



window.openEditorTool =
openEditorTool;


window.closeEditorTool =
closeEditorTool;


window.confirmEditorTool =
confirmEditorTool;


window.cancelEditorTool =
cancelEditorTool;