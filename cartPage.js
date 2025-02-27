import { ShoppingCart } from "./cart.js";
import { products } from "./products.js";

const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");
const cart = new ShoppingCart();

/**
 * Display a Material Design styled alert.
 * @param {string} message - The message to display.
 * @param {string} [type='success'] - The alert type.
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
 * Render the cart items using MDB card layouts.
 */
function renderCart() {
    cartList.innerHTML = "";
    const items = cart.getItems();

    if (items.length === 0) {
        cartList.innerHTML = `<div class="col-12"><p class="text-center">Your cart is empty.</p></div>`;
    } else {
        items.forEach((item) => {
            const colDiv = document.createElement("div");
            colDiv.className = "col-md-6 mb-4";
            colDiv.innerHTML = `
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Price: ₹${item.price.toFixed(2)}</p>
                    <p class="card-text">Quantity: ${item.quantity}</p>
                    <div class="btn-group mb-2" role="group">
                    <button class="btn btn-secondary minus" data-id="${item.id}">−</button>
                    <button class="btn btn-secondary plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn btn-danger remove btn-mb-8" data-id="${item.id}">Remove</button>
                </div>
                </div>`;
            cartList.appendChild(colDiv);
        });
    }
    totalPriceEl.textContent = cart.getTotalPrice();

    document.querySelectorAll(".plus").forEach((button) => {
        button.addEventListener("click", () => {
            const productId = parseInt(button.dataset.id);
            const product = products.find((p) => p.id === productId);
            if (product && product.stock > 0) {
                product.stock--;
                localStorage.setItem("products", JSON.stringify(products));
                cart.addItem(product);
            } else {
                showAlert("No more stock available for this product.", "danger");
            }
            renderCart();
        });
    });

    document.querySelectorAll(".minus").forEach((button) => {
        button.addEventListener("click", () => {
        const productId = parseInt(button.dataset.id);
        const product = products.find((p) => p.id === productId);
        if (product) {
            product.stock++;
            localStorage.setItem("products", JSON.stringify(products));
        }
        cart.decreaseItem(productId);
            renderCart();
        });
    });

    document.querySelectorAll(".remove").forEach((button) => {
        button.addEventListener("click", () => {
        const productId = parseInt(button.dataset.id);
        const item = cart.getItems().find((item) => item.id === productId);
        if (item) {
            const product = products.find((p) => p.id === productId);
            if (product) {
                product.stock += item.quantity;
                localStorage.setItem("products", JSON.stringify(products));
            }
        }
        cart.removeItem(productId);
            renderCart();
        });
    });
}

renderCart();
