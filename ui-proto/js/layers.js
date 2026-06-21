window.LAYERS = {

    video:[],
    text:[],
    audio:[]

};


function addLayer(type){

    if(!window.LAYERS[type]){
        return;
    }

    LAYERS[type].push({

        id:Date.now(),
        type:type,
        start:0,
        end:10

    });

    renderLayers();

}


function renderLayers(){

    console.log("layers", LAYERS);

}


window.addLayer = addLayer;
