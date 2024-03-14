// Add to script.js

function toggleAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    modal.style.display = modal.style.display === "none" ? "block" : "none";
}

function addProduct() {
    const productId = document.getElementById('product-id-modal').value.trim();
    if (productId) {
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        products.push({id: productId, stats: 'No stats available'}); // Assuming stats are a string for simplicity
        localStorage.setItem('products', JSON.stringify(products));
        document.getElementById('product-id-modal').value = ''; // Clear input field
        toggleAddProductModal(); // Hide modal
        renderProducts();
    }
}

function renderProducts() {
    const productListElement = document.getElementById('product-list');
    if (productListElement) {
        productListElement.innerHTML = ''; // Clear current list
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        
        // Adding index parameter to forEach callback to use in removeProduct
        products.forEach((product, index) => {
            let li = document.createElement('li');
            li.style.display = 'flex'; // Ensure inline display of content and button
            li.style.justifyContent = 'space-between'; // Space between product ID and remove button

            // Create span for product ID to prevent entire li from being clickable
            let span = document.createElement('span');
            span.textContent = `Product ID: ${product.id}`;
            span.style.cursor = 'pointer';
            span.onclick = () => window.location.href = `product-stats.html?id=${product.id}`;
            li.appendChild(span);

            // Create a remove button for each product
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button'); // Use class for styling (assuming you have this class in your CSS)
            removeButton.onclick = function() { removeProduct(index); };
            removeButton.style.marginLeft = '10px'; // Add some spacing
            li.appendChild(removeButton);
            productListElement.appendChild(li);
        });
    }
}

function removeProduct(index) {
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    products.splice(index, 1); // Remove the product at the specified index
    localStorage.setItem('products', JSON.stringify(products)); // Update localStorage
    renderProducts(); // Re-render the product list to reflect changes
}








// This function needs to be updated or integrated with a real stats fetching mechanism
// For now, it will just toggle stats visibility for demonstration
function showStats(productId) {
    // Locate the product in the list and toggle its stats
    // This is a placeholder for actual functionality
}

// Ensure the modal is hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    toggleAddProductModal(); // This will ensure the modal is closed initially
    renderProducts();
});
