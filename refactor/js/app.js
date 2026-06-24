import { state } from "./core/state.js";

import {
    initRenderer,
    renderFrame
} from "./core/renderer.js";

import { exportWebM } from "./core/exporter.js";

import { addCaption } from "./captions/captions.js";



window.onerror=function(
    msg,
    url,
    line
){
    alert(
        "ERROR:\n"+
        msg+
        "\nLINIA:"+
        line
    );
};



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





realVideo.onerror = ()=>{

    console.log(
        "VIDEO ERROR",
        realVideo.error
    );

};





function debugVideo(){

    console.log({

        readyState:
            realVideo.readyState,

        width:
            realVideo.videoWidth,

        height:
            realVideo.videoHeight,

        duration:
            realVideo.duration,

        current:
            realVideo.currentTime

    });

}






videoInput.onchange = e => {


    const file =
        e.target.files[0];


    if(!file) return;



    const url =
        URL.createObjectURL(file);



    console.log(
        "FILE",
        file.name,
        file.size
    );



    realVideo.src = url;


    realVideo.muted = true;


    realVideo.playsInline = true;


    realVideo.setAttribute(
        "playsinline",
        ""
    );


    realVideo.load();





    realVideo.onloadedmetadata = ()=>{


        console.log(
            "METADATA OK"
        );


        debugVideo();



        canvas.width =
            realVideo.videoWidth;


        canvas.height =
            realVideo.videoHeight;



        state.project.trim.end =
            realVideo.duration;



        /*
          wymuszamy pierwszą klatkę
        */


        realVideo.currentTime = 0.01;



    };









    realVideo.onloadeddata = ()=>{


        console.log(
            "DATA OK"
        );


        debugVideo();



    };









    realVideo.oncanplay = ()=>{


        console.log(
            "CAN PLAY"
        );


        debugVideo();



    };









    realVideo.onseeked = ()=>{


        console.log(
            "SEEKED"
        );


        debugVideo();



        requestAnimationFrame(()=>{


            renderFrame();


            console.log(
                "FRAME RENDERED"
            );


        });



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