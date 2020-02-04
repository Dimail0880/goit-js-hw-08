import galleryItems from '../gallery-items.js'
const lightboxFullImage = document.querySelector('.lightbox__image')
const galleryList = document.querySelector('.gallery')
const galleryListAction = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.lightbox')
const closeButton = document.querySelector('.lightbox__button')





// Создание и рендер разметки по массиву данных и предоставленному шаблону.


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

let url
let alt

function getImageFullURL(e) {

    e.preventDefault()

    url = e.target.dataset.source
    alt = e.target.alt

}

galleryListAction.addEventListener("click", getImageFullURL)

// Открытие модального окна по клику на элементе галереи.


function lightboxOpen() {
    lightbox.classList.add("is-open")
    lightboxFullImage.setAttribute('src', url)
    lightboxFullImage.setAttribute('alt', alt)

}
galleryListAction.addEventListener("click", lightboxOpen)



// Подмена значения атрибута src элемента img.lightbox__image


// lightboxFullImage.setAttribute('src', getImageFullURL())


// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].

// console.log(closeButton)

function closeModal() {
    lightbox.classList.remove("is-open")
}
closeButton.addEventListener('click', closeModal)


// Очистка значения атрибута src элемента img.lightbox__image.

function clearLightbox() {
    lightboxFullImage.setAttribute('src', '')
}

closeButton.addEventListener('click', clearLightbox)