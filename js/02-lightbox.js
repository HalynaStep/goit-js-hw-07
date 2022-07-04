import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");


function createImagesCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
        `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
        
    ).join("");
 
}

gallery.innerHTML = createImagesCard(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});

console.log(lightbox);

