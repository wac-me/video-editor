const resizer = document.getElementById('resizer');
const preview = document.querySelector('.preview-container');

let isResizing = false;

resizer.addEventListener('mousedown', () => isResizing = true);
resizer.addEventListener('touchstart', () => isResizing = true, { passive: true });

const doResize = (clientY) => {
    if (!isResizing) return;
    const newH = clientY - 70;
    if (newH > 40) {
        preview.style.flexBasis = newH + 'px';
    }
};

document.addEventListener('mousemove', e => doResize(e.clientY));
document.addEventListener('touchmove', e => doResize(e.touches[0].clientY));

document.addEventListener('mouseup', () => isResizing = false);
document.addEventListener('touchend', () => isResizing = false);