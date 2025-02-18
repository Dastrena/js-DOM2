import { fetchPics } from './modules/api.js';
import { loadPics, clearGallery, removeLastImage, reverseGallery } from './modules/gallery.js';

async function init() {
    await loadPics(4);  

    document.getElementById('load-more').addEventListener('click', async () => {
        await loadPics(4);
    });

    document.getElementById('clear-gallery').addEventListener('click', () => {
        clearGallery();
    });

    document.getElementById('remove-last').addEventListener('click', () => {
        console.log("Видалення останнього зображення...");
        removeLastImage();
    });

    document.getElementById('reverse-gallery').addEventListener('click', () => {
        console.log("Реверс галереї...");
        reverseGallery();
    });
}

init();
