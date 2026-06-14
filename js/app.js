import { state } from "./core/state.js";
import { initRenderer } from "./core/renderer.js";
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


const saveProject =
    document.getElementById("saveProject");


const loadProject =
    document.getElementById("loadProject");


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


        canvas.width =
            realVideo.videoWidth;


        canvas.height =
            realVideo.videoHeight;



        state.project.trim.end =
            realVideo.duration;



        const trimEnd =
            document.getElementById("trimEnd");


        if(trimEnd){

            trimEnd.value =
                realVideo.duration.toFixed(1);

        }



        // ustaw pierwszą klatkę

        realVideo.currentTime = 0;



    };



    realVideo.onseeked = ()=>{

        console.log(
            "FRAME READY"
        );

    };


};



// dodanie napisu

addCaptionBtn.onclick = ()=>{


    addCaption({

        text:
            captionText.value,


        start:
            Number(capStart.value || 0),


        end:
            Number(capEnd.value || 9999)

    });


};



// eksport

exportBtn.onclick = ()=>{


    exportWebM(
        canvas,
        realVideo
    );


};



// zapis projektu

saveProject.onclick = ()=>{


    const data =
        JSON.stringify(
            state.project,
            null,
            2
        );


    const blob =
        new Blob(
            [data],
            {
                type:"application/json"
            }
        );


    const a =
        document.createElement("a");


    a.href =
        URL.createObjectURL(blob);


    a.download =
        "project.json";


    a.click();

};



// import

loadProject.onchange = e=>{


    const file =
        e.target.files[0];


    if(!file) return;



    const reader =
        new FileReader();



    reader.onload = ()=>{


        Object.assign(
            state.project,
            JSON.parse(reader.result)
        );


    };


    reader.readAsText(file);

};