
export const products = await (async () => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        return JSON.parse(storedProducts);
    } else {
        const initialProducts = [
            { id: 1, name: "Laptop", price: 30999, stock: 5 },
            { id: 2, name: "Headphones", price: 609, stock: 10 },
            { id: 3, name: "Smartphone", price: 14999, stock: 8 },
            { id: 4, name: "Keyboard", price: 249, stock: 15 },
            { id: 5, name: "Tablet", price: 8999, stock: 9 },
            { id: 6, name: "Charger", price: 149, stock: 90 },
            { id: 7, name: "Earphone", price: 399, stock: 47 },
            { id: 8, name: "Mouse", price: 150, stock: 18 },
            { id: 9, name: "USB Cable", price: 99, stock: 86 },
        ];
        localStorage.setItem("products", JSON.stringify(initialProducts));
        return initialProducts;
    }
})();
