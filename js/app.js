import { state } from "./core/state.js";

import {
    initRenderer,
    renderFrame
} from "./core/renderer.js";

import { exportWebM } from "./core/exporter.js";

import { addCaption } from "./captions/captions.js";



const videoInput =
    document.getElementById("videoInput");

const realVideo =
    document.getElementById("video");

const canvas =
    document.getElementById("canvas");

const exportBtn =
    document.getElementById("exportBtn");

const addCaptionBtn =
    document.getElementById("addCaption");


const captionText =
    document.getElementById("captionText");

const capStart =
    document.getElementById("capStart");

const capEnd =
    document.getElementById("capEnd");



initRenderer(
    realVideo,
    canvas
);





videoInput.onchange = e => {


    const file =
        e.target.files[0];


    if(!file) return;



    const url =
        URL.createObjectURL(file);



    realVideo.src = url;

    realVideo.load();



    realVideo.onloadedmetadata = ()=>{


        console.log(
            "METADATA",
            realVideo.videoWidth,
            realVideo.videoHeight,
            realVideo.duration
        );



        canvas.width =
            realVideo.videoWidth;


        canvas.height =
            realVideo.videoHeight;



        state.project.trim.end =
            realVideo.duration;



        realVideo.currentTime = 0.1;


    };





    realVideo.onloadeddata = ()=>{


        console.log(
            "DATA READY",
            realVideo.readyState,
            realVideo.videoWidth,
            realVideo.videoHeight
        );


        renderFrame();


    };





    realVideo.onseeked = ()=>{


        console.log(
            "SEEKED",
            realVideo.videoWidth,
            realVideo.videoHeight
        );


        renderFrame();


    };


};








addCaptionBtn.onclick = ()=>{


    addCaption({

        text:
            captionText.value,


        start:
            Number(
                capStart.value || 0
            ),


        end:
            Number(
                capEnd.value || 9999
            )

    });



    renderFrame();

};






exportBtn.onclick = ()=>{


    exportWebM(
        canvas,
        realVideo
    );


};