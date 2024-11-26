const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
// Get modal element and components
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalPigType = document.getElementById("modalPigType");

// Function to open the modal with pig details
function openModal(imageSrc, description, pigType) {
    modal.style.display = "block";
    modalImage.src = imageSrc; // Set the image source
    modalDescription.textContent = description; // Set the description
    modalPigType.textContent = pigType; // Set the pig type
}

// Close modal when the user clicks on <span> (x)
document.querySelector(".close").onclick = function() {
    modal.style.display = "none";
};

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Event listeners for the buttons
document.querySelectorAll('.cat-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const pigType = event.target.getAttribute('data-type');
        let imageSrc = "";
        let description = "";

        // Set image and description based on the pig type
        if (pigType === "Landrace") {
            imageSrc = "images/Landrrace-removebg-preview.png"; // Replace with your image path
            description = "Landrace pigs are known for their high-quality meat and excellent growth rate.";
        } else if (pigType === "Duroc") {
            imageSrc = "images/dau_p2-removebg-preview.png"; // Replace with your image path
            description = "Duroc pigs are characterized by their reddish-brown color and muscular build.";
        } else if (pigType === "Large White") {
            imageSrc = "images/Large-White-Pig-removebg-preview.png"; // Replace with your image path
            description = "Large White pigs are known for their size, adaptability, and good mothering ability.";
        }

        openModal(imageSrc, description, pigType); // Open the modal with the selected pig's details
    });
});
