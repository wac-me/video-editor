window.editorSession = {

    activeTool:null,
    changed:false

};



function openEditorTool(type){


    editorSession.activeTool = type;

    editorSession.changed = false;


    showScreen(type);


}




function confirmEditorTool(){


    editorSession.changed = true;


    showScreen("editor");


}




function cancelEditorTool(){


    editorSession.changed = false;


    showScreen("editor");


}