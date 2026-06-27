import './ui/preview.js';
import './ui/timeline.js';
import './ui/tools.js';
import { initEditor } from './core/editor.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Video Editor v2 uruchomiony');
    initEditor();
});