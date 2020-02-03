import galleryItems from '../gallery-items.js'

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector('.gallery')

function createGallery(obj) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let link = document.createElement("a")
    img.src = obj.preview;
    img.alt = obj.description;
    img.dataset.source = obj.original
    img.classList.add("gallery__image");
    link.classList.add('gallery__link')
    link.href = obj.original;
    li.classList.add('gallery__item')
    li.append(link)
    link.append(img);
    return li
}
let imageList = galleryItems.map(el => createGallery(el))
galleryList.append(...imageList)


// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

const galleryListAction = document.querySelector('.js-gallery')

function getImageFullURL(event) {

    event.preventDefault();
    const target = event.target;
    let url = target.dataset.source;
    console.log(url);
    return url
}

galleryListAction.addEventListener("click", getImageFullURL)

// Открытие модального окна по клику на элементе галереи.

const lightbox = document.querySelector('.lightbox')

function lightboxOpen() {
    lightbox.classList.add("is-open")
}
galleryListAction.addEventListener("click", lightboxOpen)



// Подмена значения атрибута src элемента img.lightbox__image

const lightboxFullImage = document.querySelector('.lightbox__image')
lightboxFullImage.setAttribute('src', getImageFullURL())


// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].

const closeButton = document.querySelector('.lightbox__button')
console.log(closeButton)

function closeModal() {
    lightbox.classList.remove("is-open")
}
closeButton.addEventListener('click', closeModal)


// Очистка значения атрибута src элемента img.lightbox__image.

function clearLightbox() {
    lightboxFullImage.setAttribute('src', '')
}

closeButton.addEventListener('click', clearLightbox)