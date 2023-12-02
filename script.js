let currentPage = 1; // Initialize the current page
const maxPages = 5; // Set the total number of pages

function turnPage() {
    // Increment the current page or reset to 1 if it's the last page
    currentPage = currentPage === maxPages ? 1 : currentPage + 1;

    // Update the image source based on the current page
    const imageFolder = 'medieval_images';
    const imageElement = document.getElementById('medievalImage');
    imageElement.src = `${imageFolder}/medieval_image${currentPage}.jpg`;
}