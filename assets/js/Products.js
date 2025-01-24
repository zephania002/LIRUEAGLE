// Array of products (for demonstration)
const products = [
    {
        id: 1,
        name: "NIKON CAMERA",
        image: "images/P1.jpg",
        price: "KES 200,000.00",
        description: "Take clear photos of you and your loved ones.",
    },
    {
        id: 2,
        name: "NIVEA LOTION",
        image: "images/P2.jpg",
        price: "KES 300.00",
        description: "Pure lotion of both Men and Women",
    },
    {
        id: 3,
        name: "BROMATE BOTTLE",
        image: "images/P3.jpg",
        price: "KES 200.00",
        description: "A comfortable water bottle.",
    },
    {
        id: 4,
        name: "NIVEA LADIES",
        image: "images/P4.jpg",
        price: "KES 450.00",
        description: "Glow Girl Glow",
    },
    {
        id: 5,
        name: "PANTAJALL OATS",
        image: "images/P5.jpg",
        price: "KES 2000.00",
        description: "Oats for Healthy Babies",
    },
    {
        id: 6,
        name: "ENERGY DRINK",
        image: "images/M.png",
        price: "KES 300.00",
        description: "Pure lotion of both Men and Women",
    },
    {
        id: 7,
        name: "ENERGY DRINK",
        image: "images/M.png",
        price: "KES 200.00",
        description: "A comfortable water bottle.",
    },
    {
        id: 8,
        name: "MERRY CUPS",
        image: "images/R.png",
        price: "KES 400.00",
        description: "Glow Girl Glow",
    },
    // Add more products here...
];

// Display product modal
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        document.getElementById("modal-product-name").innerText = product.name;
        document.getElementById("modal-product-image").src = product.image;
        document.getElementById("modal-product-description").innerText = product.description;
        document.getElementById("modal-product-price").innerText = product.price;
        
        document.getElementById("product-modal").style.display = "block";
    }
}

// Close modal
function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

// Filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput)
    );
    
    // Update product grid with filtered products
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = ""; // Clear current products

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.onclick = () => viewProduct(product.id);
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <p class="product-description">${product.description}</p>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// Add product to cart (basic functionality)
function addToCart() {
    alert("Product added to cart succesfully!");
}
