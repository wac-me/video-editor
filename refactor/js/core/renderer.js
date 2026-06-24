let video = null;
let canvas = null;
let ctx = null;


import { state } from "./state.js";



export function initRenderer(
    videoElement,
    canvasElement
){

    video = videoElement;
    canvas = canvasElement;

    ctx =
        canvas.getContext(
            "2d",
            {
                alpha:false
            }
        );


    console.log(
        "RENDERER INIT",
        video
    );

}





export function renderFrame(){


    if(!video || !canvas || !ctx){

        return;

    }



    if(
        video.readyState < 2 ||
        !video.videoWidth ||
        !video.videoHeight
    ){

        return;

    }




    canvas.width =
        video.videoWidth;


    canvas.height =
        video.videoHeight;




    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    // film

    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );




    // napisy

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



    console.log(
        "FRAME OK",
        canvas.width,
        canvas.height
    );

}