import { state } from "./state.js";


let video;
let canvas;
let ctx;


const brightness =
    document.getElementById("brightness");

const contrast =
    document.getElementById("contrast");

const saturation =
    document.getElementById("saturation");

const speed =
    document.getElementById("speed");



export function initRenderer(videoElement, canvasElement){

    video = videoElement;

    canvas = canvasElement;

    ctx = canvas.getContext("2d");

    render();

}



export function render(){

    requestAnimationFrame(render);

    if(!video) return;

    if(
        video.readyState >= 2 &&
        video.videoWidth
    ){

        drawFrame();

    }

}



export function renderFrame(){

    if(
        video.readyState >= 2 &&
        video.videoWidth
    ){

        drawFrame();

    }

}



function drawFrame(){


    const b =
        brightness?.value || 100;


    const c =
        contrast?.value || 100;


    const s =
        saturation?.value || 100;



    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.filter =
    `
    brightness(${b}%)
    contrast(${c}%)
    saturate(${s}%)
    `;


    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.filter="none";



    state.project.captions.forEach(caption=>{


        if(
            video.currentTime >= caption.start &&
            video.currentTime <= caption.end
        ){


            ctx.font =
                `${caption.size}px Arial`;


            ctx.textAlign="center";


            ctx.strokeStyle="black";

            ctx.lineWidth=4;


            ctx.fillStyle =
                caption.color;



            ctx.strokeText(
                caption.text,
                caption.x,
                caption.y
            );


            ctx.fillText(
                caption.text,
                caption.x,
                caption.y
            );

        }

    });

}