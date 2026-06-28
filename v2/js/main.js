console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    const resizer = document.getElementById('resizer');
    const preview = document.querySelector('.preview-container');

    if (!resizer || !preview) return;

    let isResizing = false;

    resizer.style.touchAction = 'none';

    const start = () => isResizing = true;
    const stop = () => isResizing = false;

    const resize = (clientY) => {
        if (!isResizing) return;
        const newH = clientY - 70;
        if (newH > 60) {
            preview.style.flexBasis = newH + 'px';
        }
    };

    resizer.addEventListener('mousedown', start);
    resizer.addEventListener('touchstart', start, { passive: true });

    document.addEventListener('mousemove', e => resize(e.clientY));
    document.addEventListener('touchmove', e => {
        if (isResizing) e.preventDefault();   // blokuje scroll
        resize(e.touches[0].clientY);
    }, { passive: false });

    document.addEventListener('mouseup', stop);
    document.addEventListener('touchend', stop);
});