import { state } from "../core/state.js";


export function addCaption(data){

    state.project.captions.push({
        
        id: "cap_" + Date.now(),

        text: data.text,

        start: Number(data.start || 0),

        end: Number(data.end || 9999),

        x: 200,

        y: 200,

        size: 48,

        color: "#fff"

    });

}



export function selectCaption(x,y){

    state.drag = state.project.captions.find(c =>

        Math.abs(c.x - x) < 120 &&
        Math.abs(c.y - y) < 60

    );

    return state.drag;

}