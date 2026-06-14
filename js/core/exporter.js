import { renderFrame } from "./renderer.js";

export function exportWebM(canvas, video){


    const fps = 30;


    const stream =
        canvas.captureStream(fps);



    // audio jeśli dostępne

    try {

        const audioStream =
            video.captureStream();


        audioStream
        .getAudioTracks()
        .forEach(track=>{

            stream.addTrack(track);

        });


    } catch(e){

        console.log(
            "NO AUDIO TRACK",
            e
        );

    }




    const options = {

        mimeType:
            "video/webm"

    };



    let recorder;


    try {

        recorder =
            new MediaRecorder(
                stream,
                options
            );


    }
    catch(e){

        console.log(
            "MEDIA RECORDER ERROR",
            e
        );

        recorder =
            new MediaRecorder(
                stream
            );

    }




    const chunks=[];



    recorder.ondataavailable=e=>{

        if(e.data.size){

            chunks.push(e.data);

        }

    };




    recorder.onstop=()=>{


        const blob =
            new Blob(
                chunks,
                {
                    type:"video/webm"
                }
            );


        console.log(
            "WEBM SIZE",
            blob.size
        );



        const url =
            URL.createObjectURL(blob);



        const a =
            document.createElement("a");


        a.href=url;


        a.download=
            "export.webm";


        a.click();



        setTimeout(()=>{

            URL.revokeObjectURL(url);

        },2000);


    };






    let animation;



    function loop(){

    renderFrame();

    animation =
        requestAnimationFrame(loop);

}






    video.currentTime=0;



    video.onseeked=()=>{


        console.log(
            "EXPORT START"
        );


        recorder.start(100);


        loop();



        video.play();



    };





    video.onended=()=>{


        console.log(
            "EXPORT END"
        );


        recorder.stop();


        cancelAnimationFrame(
            animation
        );


    };



}