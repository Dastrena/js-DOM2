export async function fetchPics(count = 4, loaded = []) {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        return data.slice(loaded.length, loaded.length + count);
    } catch (error) {
        console.error('Не вдалося завантажити зображення:', error);
        return [];
    }
}
