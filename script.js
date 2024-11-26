
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalPigType = document.getElementById("modalPigType");

function openModal(imageSrc, description, pigType) {
    modal.style.display = "block";
    modalImage.src = imageSrc; 
    modalDescription.textContent = description; 
    modalPigType.textContent = pigType; 
}


document.querySelector(".close").onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.querySelectorAll('.cat-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const pigType = event.target.getAttribute('data-type');
        let imageSrc = "";
        let description = "";

        
        if (pigType === "Landrace") {
            imageSrc = "images/Landrrace-removebg-preview.png";
            description = "Landrace pigs are known for their high-quality meat, adaptability to different climates, and exceptional mothering skills. They have a long, lean body with minimal fat and are ideal for commercial pork production.";
        } else if (pigType === "Duroc") {
            imageSrc = "images/dau_p2-removebg-preview.png";
            description = "Duroc pigs are known for their reddish-brown color and muscular build. They are renowned for producing high-quality pork with excellent marbling, making them a popular choice among farmers.";
        } else if (pigType === "Large White") {
            imageSrc = "images/Large-White-Pig-removebg-preview.png";
            description = "Large White pigs are one of the most popular breeds in commercial pork production. They are known for their large size, strong growth rate, and adaptability to various farming systems.";
        }

        openModal(imageSrc, description, pigType);
    });
});
let currentSlide = 0;
displaySlides();

function displaySlides() {
    let slides = document.getElementsByClassName("carousel-slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    currentSlide++;
    if (currentSlide > slides.length) { currentSlide = 1; }

    slides[currentSlide - 1].classList.add("active");
    setTimeout(displaySlides, 3000); // Switch slide every 3 seconds
}

function navigateSlides(direction) {
    let slides = document.getElementsByClassName("carousel-slide");

    slides[currentSlide - 1].classList.remove("active");
    currentSlide += direction;
    if (currentSlide > slides.length) { currentSlide = 1; }
    if (currentSlide < 1) { currentSlide = slides.length; }

    slides[currentSlide - 1].classList.add("active");
}

function handleImageError(image, rightErrorId, leftErrorId) {
    image.style.display = 'none';
    document.getElementById(rightErrorId).innerText = "Image failed to load. Please try again later.";
    document.getElementById(leftErrorId).innerText = "Image failed to load. Please try again later.";
}

