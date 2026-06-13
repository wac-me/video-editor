import { state } from "./core/state.js";
import { initRenderer, render } from "./core/renderer.js";
import { exportWebM } from "./core/exporter.js";
import { addCaption, selectCaption } from "./captions/captions.js";


const video = videoInput;
const realVideo = document.getElementById("video");

const canvas = document.getElementById("canvas");


let drag = null;


// inicjalizacja renderera
initRenderer(realVideo, canvas);


// eksport
exportBtn.onclick = () => {

    exportWebM(
        canvas,
        realVideo
    );

};


// ładowanie filmu
videoInput.onchange = e => {

    const file = e.target.files[0];

    if(!file) return;


    realVideo.src = URL.createObjectURL(file);


    realVideo.onloadedmetadata = () => {

        canvas.width = realVideo.videoWidth;
        canvas.height = realVideo.videoHeight;


        trimEnd.value = realVideo.duration.toFixed(1);

        state.project.trim.end = realVideo.duration;


        render();

    };

};



// dodawanie napisów
addCaption.onclick = () => {

    addCaption({

        text: captionText.value,

        start: capStart.value,

        end: capEnd.value

    });

};



// zaznaczanie napisu
canvas.onmousedown = e => {


    const r = canvas.getBoundingClientRect();


    const x =
    (e.clientX - r.left) *
    (canvas.width / r.width);


    const y =
    (e.clientY - r.top) *
    (canvas.height / r.height);



    drag = selectCaption(x,y);

    state.drag = drag;

};



// przesuwanie napisów
canvas.onmousemove = e => {


    if(!drag) return;


    const r = canvas.getBoundingClientRect();


    drag.x =
    (e.clientX - r.left) *
    (canvas.width / r.width);


    drag.y =
    (e.clientY - r.top) *
    (canvas.height / r.height);


};


window.onmouseup = () => {

    drag = null;
    state.drag = null;

};



// zapis projektu JSON
saveProject.onclick = () => {


    const data = JSON.stringify(
        state.project,
        null,
        2
    );


    const a=document.createElement("a");


    a.href =
    URL.createObjectURL(
        new Blob(
            [data],
            {type:"application/json"}
        )
    );


    a.download="project.json";

    a.click();

};



// import projektu
loadProject.onchange = e => {


    const file = e.target.files[0];

    if(!file) return;


    const reader = new FileReader();


    reader.onload = () => {

        Object.assign(
            state.project,
            JSON.parse(reader.result)
        );

    };


    reader.readAsText(file);

};