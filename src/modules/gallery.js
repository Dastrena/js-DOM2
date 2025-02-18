import { fetchPics } from './api.js';

const gallery = document.getElementById('gallery');
let loaded = []; 

export async function loadPics(count = 4) {
    const images = await fetchPics(count, loaded);
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/id/${image.id}/200/200`;
        img.alt = image.author;
        gallery.appendChild(img);
        loaded.push(image.id);
    });
}

export function clearGallery() {
    gallery.innerHTML = '';
    loaded = [];
}

export function removeLastImage() {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
        loaded.pop();
    }
}

export function reverseGallery() {
    loaded.reverse();
    gallery.innerHTML = '';
    loaded.forEach(id => {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/id/${id}/200/200`;
        gallery.appendChild(img);
    });
}
