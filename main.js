import { products } from "./products.js";
import { ShoppingCart } from "./cart.js";

const productList = document.getElementById("product-list");
const cart = new ShoppingCart();

/**
 * Display a Material Design styled alert using MDB classes.
 * @param {string} message - The message to display.
 * @param {string} [type='success'] - The alert type (e.g., 'success', 'danger').
 */
function showAlert(message, type = "success") {
    const alertContainer = document.getElementById("alert-container");
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
    `;
    alertContainer.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.classList.remove("show");
        alertDiv.remove();
    }, 3000);
}

/**
 * Render the products as MDB cards.
 */
function renderProducts() {
    productList.innerHTML = "";
    products.forEach((product) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-4 mb-4";
        colDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: ₹${product.price.toFixed(2)}</p>
            <p class="card-text">In Stock: ${product.stock}</p>
            <button class="btn btn-primary" data-id="${product.id}" ${product.stock === 0 ? "disabled" : ""}>Add to Cart</button>
            </div>
        </div>
        `;
        productList.appendChild(colDiv);
    });

    document.querySelectorAll(".card button").forEach((button) => {
        button.addEventListener("click", () => {
        const productId = parseInt(button.dataset.id);
        const product = products.find((p) => p.id === productId);
        if (product && product.stock > 0) {
            product.stock--;
            localStorage.setItem("products", JSON.stringify(products));
            cart.addItem(product);
            showAlert(`${product.name} added to cart!`, "success");
            renderProducts();
        } else {
            showAlert("Sorry, this product is out of stock.", "danger");
        }
        });
    });
}

renderProducts();
