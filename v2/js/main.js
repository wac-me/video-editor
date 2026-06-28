console.log('main.js loaded successfully');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');

    const resizer = document.getElementById('resizer');
    if (resizer) {
        resizer.style.background = '#e91e63';
        resizer.style.height = '12px';
        console.log('Resizer found and colored pink');
    } else {
        console.error('Resizer NOT found!');
    }
});