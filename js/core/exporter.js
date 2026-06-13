export function exportWebM(canvas, video){


    const stream =
        canvas.captureStream(30);



    try {

        video.captureStream()
        .getAudioTracks()
        .forEach(track=>{

            stream.addTrack(track);

        });


    } catch(e){}



    const recorder =
        new MediaRecorder(stream);



    const chunks = [];



    recorder.ondataavailable = e=>{


        if(e.data.size){

            chunks.push(e.data);

        }

    };



    recorder.onstop = ()=>{


        const blob =
            new Blob(
                chunks,
                {
                    type:"video/webm"
                }
            );



        const url =
            URL.createObjectURL(blob);



        const a =
            document.createElement("a");



        a.href =
            url;



        a.download =
            "export.webm";



        document.body.appendChild(a);


        a.click();


        setTimeout(()=>{

            URL.revokeObjectURL(url);

            a.remove();

        },1000);



    };



    // start od początku filmu

    video.currentTime = 0;



    recorder.start();



    video.play();



    video.onended = ()=>{


        recorder.stop();


    };

}