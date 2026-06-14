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



export function initRenderer(
    videoElement,
    canvasElement
){

    video = videoElement;

    canvas = canvasElement;

    ctx = canvas.getContext("2d");


    render();

}



export function render(){


    requestAnimationFrame(render);



    if(!video) return;



    if(
        !video.videoWidth ||
        video.readyState < 2
    ){

        return;

    }



    const b =
        brightness?.value || 100;


    const c =
        contrast?.value || 100;


    const s =
        saturation?.value || 100;



    if(speed){

        video.playbackRate =
            Number(speed.value || 1);

    }



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



    state.project.captions.forEach(c=>{


        if(
            video.currentTime >= c.start &&
            video.currentTime <= c.end
        ){


            ctx.font =
                `${c.size}px Arial`;


            ctx.textAlign =
                "center";


            ctx.strokeStyle =
                "black";


            ctx.lineWidth =
                4;


            ctx.fillStyle =
                c.color;



            ctx.strokeText(
                c.text,
                c.x,
                c.y
            );



            ctx.fillText(
                c.text,
                c.x,
                c.y
            );


        }


    });


}