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

    const startResize = () => {
        isResizing = true;
        console.log('Start resizing');
    };

    const doResize = (clientY) => {
        if (!isResizing) return;

        const appTop = document.querySelector('.app').getBoundingClientRect().top;
        let newHeight = clientY - appTop - 55;

        if (newHeight > 200 && newHeight < window.innerHeight * 0.7) {
            preview.style.flexBasis = newHeight + 'px';
            preview.style.flexGrow = '0';
            console.log('Resizing to:', newHeight);
        }
    };

    const stopResize = () => {
        isResizing = false;
        console.log('Stop resizing');
    };

    // Mouse
    resizer.addEventListener('mousedown', startResize);
    document.addEventListener('mousemove', (e) => doResize(e.clientY));
    document.addEventListener('mouseup', stopResize);

    // Touch
    resizer.addEventListener('touchstart', startResize, { passive: true });
    document.addEventListener('touchmove', (e) => doResize(e.touches[0].clientY));
    document.addEventListener('touchend', stopResize);
});