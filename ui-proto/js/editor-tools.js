function openEditorTool(type){
 showScreen(type);
}
function confirmEditorTool(){ showScreen('editor'); }
function cancelEditorTool(){ showScreen('editor'); }
window.openEditorTool=openEditorTool;
window.confirmEditorTool=confirmEditorTool;
window.cancelEditorTool=cancelEditorTool;
