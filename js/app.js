import { state } from "./core/state.js";

const video=videoInput, realVideo=document.getElementById('video');
const canvas=document.getElementById('canvas'), ctx=canvas.getContext('2d');

const project={captions:[],filters:{brightness:100,contrast:100,saturation:100},trim:{start:0,end:0},crop:'Original',speed:1};
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
 drag=project.captions.find(c=>Math.abs(c.x-x)<120&&Math.abs(c.y-y)<60);
};
canvas.onmousemove=e=>{
 if(!drag)return;
 const r=canvas.getBoundingClientRect();
 drag.x=(e.clientX-r.left)*(canvas.width/r.width);
 drag.y=(e.clientY-r.top)*(canvas.height/r.height);
};
window.onmouseup=()=>drag=null;

function render(){
 requestAnimationFrame(render);
 if(!realVideo.videoWidth)return;

 state.project.filters.brightness=brightness.value;

 project.filters.contrast=contrast.value;
 project.filters.saturation=saturation.value;

 realVideo.playbackRate=Number(speed.value);

 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.filter=`brightness(${brightness.value}%) contrast(${contrast.value}%) saturate(${saturation.value}%)`;
 ctx.drawImage(realVideo,0,0,canvas.width,canvas.height);
 ctx.filter='none';

 project.captions.forEach(c=>{
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
 realVideo.currentTime=Number(trimStart.value||0);
 rec.start(); realVideo.play();
 const stopAt=Number(trimEnd.value||realVideo.duration);
 const timer=setInterval(()=>{
  if(realVideo.currentTime>=stopAt){clearInterval(timer); rec.stop(); realVideo.pause();}
 },100);
};
