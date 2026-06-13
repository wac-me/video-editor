import { state } from "./core/state.js";
import { initRenderer, render } 
from "./core/renderer.js";
import { exportWebM } from "./core/exporter.js";
import { addCaption, selectCaption }
from "./captions/captions.js";


exportBtn.onclick=()=>{

    exportWebM(
        canvas,
        realVideo
    );

};

const video=videoInput, realVideo=document.getElementById('video');
const canvas=document.getElementById('canvas'), 


let drag=null;

videoInput.onchange=e=>{
 const f=e.target.files[0]; if(!f)return;
 realVideo.src=URL.createObjectURL(f);
 realVideo.onloadedmetadata=()=>{
  canvas.width=realVideo.videoWidth; canvas.height=realVideo.videoHeight;
  trimEnd.value=realVideo.duration.toFixed(1);
  
  state.project.trim.end=realVideo.duration;
  render();
 };
};

addCaption.onclick=()=>{
 state.project.captions.push({
  text:captionText.value,
  start:Number(capStart.value||0),
  end:Number(capEnd.value||9999),
  x:200,y:200,size:48,color:'#fff'
 });
};

canvas.onmousedown=e=>{
 const r=canvas.getBoundingClientRect();
 const x=(e.clientX-r.left)*(canvas.width/r.width);
 const y=(e.clientY-r.top)*(canvas.height/r.height);
 state,drag=state.project.captions.find(c=>Math.abs(c.x-x)<120&&Math.abs(c.y-y)<60);
};
canvas.onmousemove=e=>{
 if(!drag)return;
 const r=canvas.getBoundingClientRect();
 drag.x=(e.clientX-r.left)*(canvas.width/r.width);
 drag.y=(e.clientY-r.top)*(canvas.height/r.height);
};
window.onmouseup=()=>drag=null;



 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.filter=`brightness(${brightness.value}%) contrast(${contrast.value}%) saturate(${saturation.value}%)`;
 ctx.drawImage(realVideo,0,0,canvas.width,canvas.height);
 ctx.filter='none';

 state.project.captions.forEach(c=>{
  if(realVideo.currentTime>=c.start&&realVideo.currentTime<=c.end){
   ctx.font=`${c.size}px Arial`;
   ctx.textAlign='center';
   ctx.strokeStyle='black';ctx.lineWidth=4;
   ctx.fillStyle=c.color;
   ctx.strokeText(c.text,c.x,c.y);
   ctx.fillText(c.text,c.x,c.y);
  }
 });
}

saveProject.onclick=()=>{
 const data=JSON.stringify(project,null,2);
 const a=document.createElement('a');
 a.href=URL.createObjectURL(new Blob([data],{type:'application/json'}));
 a.download='project.json'; a.click();
};

loadProject.onchange=e=>{
 const f=e.target.files[0]; if(!f)return;
 const r=new FileReader();
 r.onload=()=>Object.assign(project,JSON.parse(r.result));
 r.readAsText(f);
};

exportBtn.onclick = () => {
    exportWebM();
};
 realVideo.currentTime=Number(trimStart.value||0);
 rec.start(); realVideo.play();
 const stopAt=Number(trimEnd.value||realVideo.duration);
 const timer=setInterval(()=>{
  if(realVideo.currentTime>=stopAt){clearInterval(timer); rec.stop(); realVideo.pause();}
 },100);
};
