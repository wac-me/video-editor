window.LAYERS = {


    video:[],
    text:[],
    audio:[]


};



window.editorState = {


    activeLayer:null


};



function selectLayer(type){
    editorState.activeLayer = type;
    openEditorTool(type); // ← zamiast updateTools(type)
    
    document
    .querySelectorAll(".track-label")
    .forEach(el=>{
        el.classList.remove("active-layer");
    });

    const active = document.querySelector(`[data-layer="${type}"]`);
    if(active){
        active.classList.add("active-layer");
    }
}
