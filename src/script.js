const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('load-more');
const clearGalleryButton = document.getElementById('clear-gallery');
const removeLastButton = document.getElementById('remove-last');
const reverseGalleryButton = document.getElementById('reverse-gallery');
let loaded = []; // Track loaded image IDs

async function fetchPics(count = 4) {
  try {
    const response = await fetch('https://picsum.photos/v2/list');
    const data = await response.json();
    return data.slice(loaded.length, loaded.length + count); 
  } catch (error) {
    console.error('Не вийшло завантажити картинки:', error);
  }
}

async function loadPics(count = 4) {
  const images = await fetchPics(count);
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/id/${image.id}/200/200`;
    img.alt = image.author;
    gallery.appendChild(img);
    loaded.push(image.id);
  });
}

loadMoreButton.addEventListener('click', () => loadPics(4));

clearGalleryButton.addEventListener('click', () => {
  gallery.innerHTML = '';
  loaded = [];
});

removeLastButton.addEventListener('click', () => {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
    loaded.pop();
  }
});

reverseGalleryButton.addEventListener('click', () => {
  loaded.reverse();
  gallery.innerHTML = '';
  loaded.forEach(id => {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/id/${id}/200/200`;
    gallery.appendChild(img);
  });
});
loadPics(4);
