// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Video Editor v2 uruchomiony');
    
    initResizer();
});

// Resizer
function initResizer() {
    const resizer = document.getElementById('resizer');
    const previewContainer = document.querySelector('.preview-container');

    if (!resizer || !previewContainer) {
        console.warn('Resizer or preview container not found');
        return;
    }

    let isResizing = false;

    function startResize(e) {
        isResizing = true;
        document.body.style.userSelect = 'none';
    }

    function resize(e) {
        if (!isResizing) return;

        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const appRect = document.querySelector('.app').getBoundingClientRect();
        let newHeight = clientY - appRect.top - 60;

        if (newHeight > 180 && newHeight < window.innerHeight * 0.75) {
            previewContainer.style.flexBasis = `${newHeight}px`;
            previewContainer.style.flexGrow = '0';
        }
    }

    function stopResize() {
        isResizing = false;
        document.body.style.userSelect = '';
    }

    resizer.addEventListener('mousedown', startResize);
    resizer.addEventListener('touchstart', startResize, { passive: true });

    document.addEventListener('mousemove', resize);
    document.addEventListener('touchmove', resize, { passive: false });
    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchend', stopResize);
}