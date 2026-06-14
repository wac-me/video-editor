let video = null;
let canvas = null;
let ctx = null;



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


    if(!video){

        console.log(
            "RENDERER: brak video"
        );

        return;

    }



    if(!canvas || !ctx){

        console.log(
            "RENDERER: brak canvas"
        );

        return;

    }



    if(
        video.readyState < 2 ||
        !video.videoWidth ||
        !video.videoHeight
    ){

        console.log(
            "RENDERER: brak klatki",
            {
                ready:
                video.readyState,

                width:
                video.videoWidth,

                height:
                video.videoHeight
            }
        );


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



    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );



    console.log(
        "FRAME OK",
        canvas.width,
        canvas.height
    );

}