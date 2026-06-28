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
    };

    const doResize = (clientY) => {
        if (!isResizing) return;

        const appRect = document.querySelector('.app').getBoundingClientRect();
        let newHeight = clientY - appRect.top - 55;

        // Tylko dolne ograniczenie (timeline może być spychany)
        if (newHeight > 60) {
            preview.style.flexBasis = newHeight + 'px';
            preview.style.flexGrow = '0';
        }
    };

    const stopResize = () => {
        isResizing = false;
    };

    resizer.addEventListener('mousedown', startResize);
    resizer.addEventListener('touchstart', startResize, { passive: true });

    document.addEventListener('mousemove', (e) => doResize(e.clientY));
    document.addEventListener('touchmove', (e) => doResize(e.touches[0].clientY));

    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchend', stopResize);
});