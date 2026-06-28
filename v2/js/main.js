document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Video Editor v2 uruchomiony');

    const resizer = document.getElementById('resizer');
    const preview = document.querySelector('.preview-container');

    if (!resizer || !preview) {
        console.error('Resizer or preview not found!');
        return;
    }

    let isResizing = false;

    resizer.addEventListener('mousedown', () => isResizing = true);
    resizer.addEventListener('touchstart', () => isResizing = true, { passive: true });

    const doResize = (clientY) => {
        if (!isResizing) return;
        const appTop = document.querySelector('.app').getBoundingClientRect().top;
        let newH = clientY - appTop - 55;

        if (newH > 180 && newH < window.innerHeight * 0.72) {
            preview.style.flexBasis = newH + 'px';
            preview.style.flexGrow = '0';
        }
    };

    document.addEventListener('mousemove', e => doResize(e.clientY));
    document.addEventListener('touchmove', e => doResize(e.touches[0].clientY));

    const stop = () => isResizing = false;
    document.addEventListener('mouseup', stop);
    document.addEventListener('touchend', stop);
});