let currentIndex = 0;
const slides = document.querySelector('.slides');

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 25}%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 4) % 4;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 4;
  showSlide(currentIndex);
}


function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  