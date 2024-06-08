document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('imageUpload');
    const imageContainer = document.getElementById('imageContainer');

    imageUpload.addEventListener('change', (event) => {
        const files = event.target.files;
        imageContainer.innerHTML = ''; // Clear existing images
        Array.from(files).forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.classList.add('mySlides');
                if (index === 0) img.style.display = 'block';
                imageContainer.appendChild(img);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        });
        showSlides(slideIndex = 1);
    });

    let slideIndex = 1;

    const showSlides = (n) => {
        const slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    window.plusSlides = (n) => {
        showSlides(slideIndex += n);
    }
});
