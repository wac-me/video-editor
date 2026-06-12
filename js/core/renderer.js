import { state } from "./state.js";

let video;
let canvas;
let ctx;


export function initRenderer(videoElement, canvasElement) {

    video = videoElement;
    canvas = canvasElement;
    ctx = canvas.getContext("2d");

}


export function render(){

    requestAnimationFrame(render);

    if(!video.videoWidth) return;


    state.project.filters.brightness = brightness.value;
    state.project.filters.contrast = contrast.value;
    state.project.filters.saturation = saturation.value;


    video.playbackRate = Number(speed.value);


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.filter =
    `
    brightness(${brightness.value}%)
    contrast(${contrast.value}%)
    saturate(${saturation.value}%)
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

            ctx.font=`${c.size}px Arial`;

            ctx.textAlign="center";

            ctx.strokeStyle="black";
            ctx.lineWidth=4;

            ctx.fillStyle=c.color;


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

exportBtn.onclick=()=>{
 const stream=canvas.captureStream(30);
 try{realVideo.captureStream().getAudioTracks().forEach(t=>stream.addTrack(t));}catch(e){}
 const rec=new MediaRecorder(stream);
 const chunks=[];
 rec.ondataavailable=e=>e.data.size&&chunks.push(e.data);
 rec.onstop=()=>{
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob(chunks,{type:'video/webm'}));
  a.download='export.webm'; a.click();
 };

