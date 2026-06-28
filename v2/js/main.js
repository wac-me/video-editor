console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    const resizer = document.getElementById('resizer');
    const preview = document.querySelector('.preview-container');

    if (resizer) {
        resizer.style.background = '#e91e63';
        resizer.style.height = '12px';
        console.log('Resizer colored pink');
    }

    // Prosty test kliknięcia
    if (resizer) {
        resizer.addEventListener('click', () => {
            console.log('Resizer clicked!');
            alert('Resizer clicked! Działa');
        });
    }
});