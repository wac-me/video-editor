export function exportWebM(canvas, video){

    const stream = canvas.captureStream(30);

    try {
        video.captureStream()
        .getAudioTracks()
        .forEach(track => stream.addTrack(track));
    }
    catch(e){}


    const recorder = new MediaRecorder(stream);

    const chunks = [];


    recorder.ondataavailable = e => {
        if(e.data.size){
            chunks.push(e.data);
        }
    };


    recorder.onstop = ()=>{

        const blob = new Blob(
            chunks,
            {type:"video/webm"}
        );

        const a=document.createElement("a");

        a.href=URL.createObjectURL(blob);

        a.download="export.webm";

        a.click();

    };


    recorder.start();

    video.play();

}