// Video Editor v2 - Main
console.log('🚀 Video Editor v2 - main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM fully loaded');

    initResizer();
});

// ==================== RESIZER ====================
function initResizer() {
    const resizer = document.getElementById('resizer');
    const previewContainer = document.querySelector('.preview-container');

    if (!resizer || !previewContainer) {
        console.error('❌ Resizer or preview container not found');
        return;
    }

    console.log('✅ Resizer initialized');

    let isResizing = false;

    // Start resize
    const startResize = (e) => {
        isResizing = true;
        document.body.style.userSelect = 'none';
        console.log('Resizing started');
    };

    // Resize
    const doResize = (clientY) => {
        if (!isResizing) return;

        const appRect = document.querySelector('.app').getBoundingClientRect();
        let newHeight = clientY - appRect.top - 60;

        if (newHeight > 180 && newHeight < window.innerHeight * 0.75) {
            previewContainer.style.flexBasis = `${newHeight}px`;
            previewContainer.style.flexGrow = '0';
        }
    };

    // Stop resize
    const stopResize = () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.userSelect = '';
            console.log('Resizing stopped');
        }
    };

    // Event listeners
    resizer.addEventListener('mousedown', startResize);
    resizer.addEventListener('touchstart', startResize, { passive: true });

    document.addEventListener('mousemove', (e) => doResize(e.clientY));
    document.addEventListener('touchmove', (e) => doResize(e.touches[0].clientY), { passive: false });

    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchend', stopResize);
};