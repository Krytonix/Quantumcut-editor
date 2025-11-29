document.addEventListener('DOMContentLoaded', () => {
    // Basic functionality for toggling panel content visibility (e.g., expand/collapse)
    const panelHeaders = document.querySelectorAll('.panel-header');
    panelHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content && content.classList.contains('panel-content')) {
                content.style.display = content.style.display === 'none' ? 'flex' : 'none';
                header.classList.toggle('collapsed');
            }
        });
    });

    // Placeholder for more complex editor interactions like drag-and-drop on timeline
    const timelineTracks = document.querySelector('.timeline-tracks');
    if (timelineTracks) {
        timelineTracks.addEventListener('dragover', (e) => {
            e.preventDefault(); // Allow drop
            timelineTracks.style.border = '2px dashed var(--neon-blue)';
        });

        timelineTracks.addEventListener('dragleave', (e) => {
            timelineTracks.style.border = 'none';
        });

        timelineTracks.addEventListener('drop', (e) => {
            e.preventDefault();
            timelineTracks.style.border = 'none';
            const data = e.dataTransfer.getData('text/plain');
            console.log('Dropped item:', data);
            // Simulate adding a new track item
            const newItem = document.createElement('div');
            newItem.classList.add('track-item');
            newItem.textContent = `Dropped: ${data}`;
            timelineTracks.appendChild(newItem);
            // In a real editor, you'd handle actual asset insertion
        });

        // Make track items draggable (example)
        const sampleTrackItem = document.createElement('div');
        sampleTrackItem.classList.add('track-item');
        sampleTrackItem.textContent = 'Sample Asset';
        sampleTrackItem.setAttribute('draggable', true);
        sampleTrackItem.style.cssText = `
            background-color: rgba(0, 224, 255, 0.2);
            border: 1px solid var(--neon-blue);
            margin: 5px;
            padding: 5px;
            border-radius: 3px;
            cursor: grab;
        `;
        sampleTrackItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', 'Sample Asset');
        });
        // Append to the first track as an example
        const firstTrack = document.querySelector('.timeline-tracks .track');
        if (firstTrack) {
            firstTrack.appendChild(sampleTrackItem);
        }
    }
});
