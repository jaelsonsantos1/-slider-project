// script.js
function fetchImages() {
  fetch('/images')
    .then(response => response.json())
    .then(data => {
      const slider = document.querySelector('.slider');
      data.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Slider Image';
        img.classList.add('slide');
        slider.appendChild(img);
      });

      const slides = document.querySelectorAll('.slide');
      let currentImageIndex = 0;

      function showImage() {
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }

        slides[currentImageIndex].style.display = 'block';

        currentImageIndex++;

        if (currentImageIndex === slides.length) {
          currentImageIndex = 0;
        }
      }

      showImage();

      setInterval(showImage, 5000);
    })
    .catch(error => console.error(error));
}

fetchImages();
