const resizer = document.getElementById('resizer');
const resizer = document.getElementById('resizer');
resizer.style.touchAction = 'none';   // blokuje scroll podczas przeciągania
const preview = document.querySelector('.preview-container');


let isResizing = false;

resizer.addEventListener('mousedown', () => isResizing = true);
resizer.addEventListener('touchstart', () => isResizing = true, { passive: true });

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const newH = e.clientY - 70;
    if (newH > 60) preview.style.flexBasis = newH + 'px';
});

document.addEventListener('touchmove', (e) => {
    if (!isResizing) return;
    const newH = e.touches[0].clientY - 70;
    if (newH > 60) preview.style.flexBasis = newH + 'px';
});

document.addEventListener('mouseup', () => isResizing = false);
document.addEventListener('touchend', () => isResizing = false);