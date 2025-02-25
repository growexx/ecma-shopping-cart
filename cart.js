export class ShoppingCart {
    #items = [];

    constructor() {
        this.#loadFromStorage();
    }

    addItem(product) {
        const existingItem = this.#items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.#items.push({ ...product, quantity: 1 });
        }
        this.#saveToStorage();
    }

    decreaseItem(productId) {
        const item = this.#items.find(item => item.id === productId);
        if (item) {
            item.quantity--;
            if (item.quantity <= 0) {
                this.#items = this.#items.filter(item => item.id !== productId);
            }
            this.#saveToStorage();
        }
    }

    removeItem(productId) {
        this.#items = this.#items.filter(item => item.id !== productId);
        this.#saveToStorage();
    }

    getItems() {
        return [...this.#items];
    }

    getTotalPrice() {
      return this.#items
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    }

    // Private method: Save cart items to Local Storage
    #saveToStorage() {
        localStorage.setItem("cart", JSON.stringify(this.#items));
    }

    // Private method: Load cart items from Local Storage
    #loadFromStorage() {
        const storedItems = localStorage.getItem("cart");
        if (storedItems) {
            this.#items = JSON.parse(storedItems);
        }
    }
}
