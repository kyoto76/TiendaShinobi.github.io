
// Función para mostrar los productos de una categoría
function mostrarProductos(categoria) {
    // Obtener todos los elementos con la clase "producto"
    const productos = document.querySelectorAll('.producto');
    
    // Recorrer cada producto
    productos.forEach(producto => {
        // Obtener la categoría del producto
        const categoriaProducto = producto.getAttribute('data-categoria');
        
        // Verificar si la categoría del producto coincide con la categoría seleccionada
        if (categoriaProducto === categoria || categoria === 'todos') {
            // Mostrar el producto
            producto.style.display = 'block';
        } else {
            // Ocultar el producto
            producto.style.display = 'none';
        }
    });
}

// Event listener para los botones de categoría
document.querySelectorAll('.categoria').forEach(boton => {
    boton.addEventListener('click', function() {
        // Obtener la categoría del botón
        const categoria = this.getAttribute('data-categoria');
        
        // Mostrar los productos correspondientes a la categoría seleccionada
        mostrarProductos(categoria);
    });
});

// Mostrar solo los productos de la categoría "Tienda de Mascotas" al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos('mascotas');
});

// Carrusel de la galería de fotos
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slidesGallery = document.querySelectorAll('.carousel-slide img').length;
let currentPhotoIndex = 0;
let slideWidth = document.querySelector('.carousel-slide img').clientWidth;

function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentPhotoIndex * slideWidth}px)`;
}

function nextSlide() {
    currentPhotoIndex = (currentPhotoIndex + 1) % slidesGallery;
    updateCarousel();
}

function prevSlide() {
    currentPhotoIndex = (currentPhotoIndex - 1 + slidesGallery) % slidesGallery;
    updateCarousel();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
});

window.addEventListener('resize', () => {
    slideWidth = document.querySelector('.carousel-slide img').clientWidth;
    updateCarousel();
});

// Intervalo para cambio automático de diapositivas
let intervalId = setInterval(() => {
    nextSlide();
}, 4000); // Cambia de imagen cada 5 segundos (5000 milisegundos)

// Detener el carrusel automático al hacer clic en botones de navegación
nextBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});

prevBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});

document.addEventListener("DOMContentLoaded", function() {
    // Add the WhatsApp button
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://walink.co/2f3f0c';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.innerHTML = '<img src="image/whatsapp.svg" alt="WhatsApp">';
    document.body.appendChild(whatsappButton);

    // Add the scroll-to-top button
    const topButton = document.createElement('button');
    topButton.id = 'top-button';
    topButton.innerHTML = '<img src="image/arrow-up-circle.svg" alt="Ir Arriba">';
    document.body.appendChild(topButton);

    // Scroll event for showing/hiding the scroll-to-top button
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topButton.style.display = 'flex';
        } else {
            topButton.style.display = 'none';
        }
    };

    // Click event for the scroll-to-top button
    topButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});


  

