export function initEditor() {
    console.log('Core editor initialized');
    // Tutaj będzie logika projektu, timeline, warstwy itp.
}

export let currentProject = {
    id: 'proj-' + Date.now(),
    name: 'Nowy projekt',
    duration: 0,
    clips: [],
    tracks: []
};