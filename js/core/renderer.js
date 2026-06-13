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


export function initRenderer(videoElement, canvasElement) {

    video = videoElement;

    canvas = canvasElement;

    ctx = canvas.getContext("2d");

    // uruchom pętlę renderowania
    render();

}


export function render() {

    requestAnimationFrame(render);

    if (!video) return;

    if (!video.videoWidth) return;


    state.project.filters.brightness =
        Number(brightness.value);

    state.project.filters.contrast =
        Number(contrast.value);

    state.project.filters.saturation =
        Number(saturation.value);


    video.playbackRate =
        Number(speed.value || 1);


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.filter =
        `brightness(${brightness.value}%)
         contrast(${contrast.value}%)
         saturate(${saturation.value}%)`;


    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.filter = "none";


    state.project.captions.forEach(c => {

        if (
            video.currentTime >= c.start &&
            video.currentTime <= c.end
        ) {

            ctx.font = `${c.size}px Arial`;

            ctx.textAlign = "center";

            ctx.strokeStyle = "black";

            ctx.lineWidth = 4;

            ctx.fillStyle = c.color;


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