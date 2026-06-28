const resizer = document.getElementById('resizer');
const preview = document.querySelector('.preview-container');


const doResize = (clientY) => {
    if (!isResizing) return;

    const appRect = document.querySelector('.app').getBoundingClientRect();
    let newHeight = clientY - appRect.top - 60;

    if (newHeight > 40) {
        preview.style.height = newHeight + 'px';
        preview.style.flexBasis = 'auto';   // reset
        console.log('Preview height →', newHeight);
    }
};

let isResizing = false;

resizer.addEventListener('mousedown', () => isResizing = true);
resizer.addEventListener('touchstart', () => isResizing = true, { passive: true });

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const newH = e.clientY - 70;
    if (newH > 40) preview.style.flexBasis = newH + 'px';
});

document.addEventListener('touchmove', (e) => {
    if (!isResizing) return;
    const newH = e.touches[0].clientY - 70;
    if (newH > 40) preview.style.flexBasis = newH + 'px';
});

document.addEventListener('mouseup', () => isResizing = false);
document.addEventListener('touchend', () => isResizing = false);