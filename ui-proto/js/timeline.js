const timeline = {

    duration:15,

    current:0


};



function formatTime(seconds){

    let min=Math.floor(seconds/60);

    let sec=Math.floor(seconds%60);


    return (
        String(min).padStart(2,"0")
        +
        ":"
        +
        String(sec).padStart(2,"0")
    );

}




function initTimeline(){


    const track =
document.querySelector(".timeline-area");


    const playhead =
        document.querySelector(".playhead");


    const time =
        document.querySelector("#currentTime");



    if(!track)
        return;



    track.addEventListener(
        "click",
        e=>{


            const rect =
                track.getBoundingClientRect();



            const position =
                e.clientX - rect.left;



            const percent =
                position / rect.width;



            timeline.current =
                timeline.duration * percent;



            playhead.style.left =
                percent*100+"%";



            time.textContent =
                formatTime(
                    timeline.current
                );



        }

    );

}

document.addEventListener(
"DOMContentLoaded",
()=>{

    initTimeline();

});


const projectTimeline={


    video:{

        start:0,

        end:15

    },


    text:[

        {

            text:"TEST",

            start:4,

            end:8

        }

    ]


};


function renderLayers(){ console.log('timeline refresh', window.LAYERS); }
window.renderLayers=renderLayers;

