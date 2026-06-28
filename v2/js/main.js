console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    const resizer = document.getElementById('resizer');
    const previewContainer = document.querySelector('.preview-container');

    if (!resizer || !previewContainer) {
        console.error('Resizer elements not found');
        return;
    }

    let isResizing = false;

    const startResize = () => isResizing = true;
    const stopResize = () => isResizing = false;

    const doResize = (clientY) => {
        if (!isResizing) return;

        const appRect = document.querySelector('.app').getBoundingClientRect();
        let newHeight = clientY - appRect.top - 60;

        if (newHeight > 40) {
            previewContainer.style.flexBasis = newHeight + 'px';
            previewContainer.style.flexGrow = '0';
            console.log('Preview resized to:', newHeight);
        }
    };

    resizer.addEventListener('mousedown', startResize);
    resizer.addEventListener('touchstart', startResize, { passive: true });

    document.addEventListener('mousemove', e => doResize(e.clientY));
    document.addEventListener('touchmove', e => doResize(e.touches[0].clientY));

    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchend', stopResize);
});