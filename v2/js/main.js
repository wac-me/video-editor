console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    const resizer = document.getElementById('resizer');
    const preview = document.querySelector('.preview-container');

    if (!resizer || !preview) {
        console.error('Elements not found');
        return;
    }

    let isResizing = false;

    // Start
    const startResize = (e) => {
        isResizing = true;
        console.log('Start resizing');
    };

    // Resize
    const doResize = (clientY) => {
        if (!isResizing) return;

        const appTop = document.querySelector('.app').getBoundingClientRect().top;
        let newHeight = clientY - appTop - 60;

        if (newHeight > 180 && newHeight < window.innerHeight * 0.72) {
            preview.style.flexBasis = newHeight + 'px';
            preview.style.flexGrow = '0';
            console.log('Resizing →', newHeight);
        }
    };

    // Stop
    const stopResize = () => {
        isResizing = false;
        console.log('Stopped resizing');
    };

    // Events
    resizer.addEventListener('mousedown', startResize);
    resizer.addEventListener('touchstart', startResize, { passive: true });

    document.addEventListener('mousemove', (e) => doResize(e.clientY));
    document.addEventListener('touchmove', (e) => doResize(e.touches[0].clientY));

    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchend', stopResize);
});