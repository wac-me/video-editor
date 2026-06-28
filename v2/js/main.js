document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Video Editor v2 uruchomiony');

    const resizer = document.getElementById('resizer');
    const preview = document.querySelector('.preview-container');

    if (!resizer) {
        console.error('Resizer not found!');
        return;
    }

    let isResizing = false;

    resizer.style.background = '#e91e63'; // tymczasowo jaskrawy kolor żeby było widać

    resizer.addEventListener('mousedown', () => {
        isResizing = true;
        console.log('mousedown - start resizing');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        console.log('moving', e.clientY);
        
        const newHeight = e.clientY - 80;
        if (newHeight > 200) {
            preview.style.height = newHeight + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isResizing = false;
        console.log('mouseup - stop');
    });

    // Mobile
    resizer.addEventListener('touchstart', () => {
        isResizing = true;
        console.log('touchstart');
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!isResizing) return;
        const newHeight = e.touches[0].clientY - 80;
        if (newHeight > 200) {
            preview.style.height = newHeight + 'px';
        }
    });

    document.addEventListener('touchend', () => {
        isResizing = false;
    });
});