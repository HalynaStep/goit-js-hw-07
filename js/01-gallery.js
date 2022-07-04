import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const gallery = document.querySelector(".gallery");
const imageCard = createImagesCard(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageCard);

function createImagesCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
    `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                // data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
    `
        
    ).join("");
 
}


// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.

gallery.addEventListener('click', onGalleryClick);


function onGalleryClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !=='IMG') {
        return;  
    }
    const modalWindow = basicLightbox.create(`
        <img src=${event.target.dataset.source}
        width="800" height="600">
    `
    );
    modalWindow.show(window.addEventListener("keydown", onModalClose));
    
    
    
    function onModalClose(event) {
    if (event.code === 'Escape') {
        modalWindow.close(window.removeEventListener("keydown", onModalClose));   
    }  
    }
}

