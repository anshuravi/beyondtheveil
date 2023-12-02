let currentPage = 1; // Initialize the current page

function turnPage() {
    const maxPages = 3; // Set the total number of pages

    // Increment the current page or reset to 1 if it's the last page
    currentPage = currentPage === maxPages ? 1 : currentPage + 1;

    // Update the image source based on the current page
    document.getElementById('medievalImage').src = `fairy${currentPage}.png`;
}