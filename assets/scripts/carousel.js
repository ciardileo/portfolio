const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block'; // Exibe o slide atual
    } else {
      slide.style.display = 'none'; // Oculta os outros slides
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

// Mostra o primeiro slide ao carregar a página
showSlide(currentIndex);

// Troca para o próximo slide quando o botão "Próximo" é clicado
nextButton.addEventListener('click', nextSlide);

// Troca para o slide anterior quando o botão "Anterior" é clicado
prevButton.addEventListener('click', prevSlide);
