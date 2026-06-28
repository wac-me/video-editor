console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    const resizer = document.getElementById('resizer');
    const preview = document.querySelector('.preview-container');

    if (!resizer || !preview) return;

    let isResizing = false;

    const start = () => isResizing = true;
    const stop = () => isResizing = false;

    const resize = (clientY) => {
        if (!isResizing) return;
        const newH = clientY - 70;
        if (newH > 60) {
            preview.style.flexBasis = newH + 'px';
        }
    };

    // Mouse
    resizer.addEventListener('mousedown', start);
    document.addEventListener('mousemove', e => resize(e.clientY));
    document.addEventListener('mouseup', stop);

    // Touch (z preventDefault)
    resizer.addEventListener('touchstart', start, { passive: true });
    document.addEventListener('touchmove', e => {
        if (isResizing) {
            e.preventDefault();   // blokuje scroll
            resize(e.touches[0].clientY);
        }
    }, { passive: false });
    document.addEventListener('touchend', stop);
});