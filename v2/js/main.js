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

function resize(e) {
    if (!isResizing) return;

    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const rect = document.querySelector('.app').getBoundingClientRect();
    const newPreviewHeight = clientY - rect.top - 60; // 60px top bar approx

    if (newPreviewHeight > 200 && newPreviewHeight < window.innerHeight * 0.7) {
        previewContainer.style.flex = `0 0 ${newPreviewHeight}px`;
    }
}

function stopResize() {
    isResizing = false;
    document.body.style.userSelect = '';
}
</script>