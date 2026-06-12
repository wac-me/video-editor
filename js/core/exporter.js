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
