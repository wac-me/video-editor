import './ui/preview.js';
import './ui/timeline.js';
import './ui/tools.js';
import { initEditor } from './core/editor.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Video Editor v2 uruchomiony');
    initEditor();
});

<script>
// Resizer
const resizer = document.getElementById('resizer');
const previewContainer = document.querySelector('.preview-container');
const timelineContainer = document.querySelector('.timeline-container');

let isResizing = false;

resizer.addEventListener('mousedown', startResize);
resizer.addEventListener('touchstart', startResize, { passive: true });

function startResize(e) {
    isResizing = true;
    document.body.style.userSelect = 'none';
}

document.addEventListener('mousemove', resize);
document.addEventListener('touchmove', resize, { passive: false });
document.addEventListener('mouseup', stopResize);
document.addEventListener('touchend', stopResize);

