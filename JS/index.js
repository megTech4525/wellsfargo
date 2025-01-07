const imageInput = document.getElementById("upload");
const imageDisplay = document.getElementById("Profile-image");
let loadedFunds = document.getElementById("available-balance")
let currentFunds = document.getElementById("current-balance")
const ledgerBalanceDisplay = document.getElementById('Total-balance')

// Function to handle image upload and store it in localStorage
function handleImageUpload(event) {
const file = event.target.files[0]; // Get the uploaded file
if (file) {
        const reader = new FileReader(); // Create a FileReader instance
        // On file read, save the image in localStorage
        reader.onload = () => {
            const imageData = reader.result; // Convert image to Base64 data URL
            localStorage.setItem("profileImage", imageData); // Save in localStorage
            imageDisplay.src = imageData; // Display the image
            // profileimageDisplay.src = imageData;
        };

        reader.readAsDataURL(file); // Read the image file as a data URL
    }
}
// Function to load the image from localStorage on page load
function loadImageFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        imageDisplay.src = savedImage; // Set the src of the img tag
        // profileimageDisplay.src = savedImage;
        
    }
}
// Event listener for file input
imageInput.addEventListener("change", handleImageUpload);

// Load the saved image when the page loads
window.addEventListener("DOMContentLoaded", loadImageFromLocalStorage);


function loadBalanceFromLocalStorage() {
    const savedBalance = parseFloat(localStorage.getItem('initialAmount')) || 0;
    loadedFunds.innerHTML = "&dollar;" + savedBalance.toLocaleString();
    currentFunds.innerHTML = "&dollar;" + savedBalance.toLocaleString();
    ledgerBalanceDisplay.innerHTML = "&dollar;" + savedBalance.toLocaleString();
}

loadBalanceFromLocalStorage();
