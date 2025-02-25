# Shopping Cart Project

A modern Shopping Cart web application built with Material Design using MDB UI Kit. The project demonstrates the use of ES Modules, Local Storage, and dynamic DOM manipulation with JavaScript. It also features a responsive UI with a header, product cards, and a separate cart view.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run the Project](#how-to-run-the-project)
- [JavaScript Function Explanations](#javascript-function-explanations)
  - [products.js](#productsjs)
  - [cart.js](#cartjs)
  - [main.js](#mainjs)
  - [cartPage.js](#cartpagejs)

## Overview

This Shopping Cart project provides a complete example of a modern web application where users can:

- Browse a dynamically generated list of products.
- Add products to a shopping cart.
- Manage product quantities and view the cart on a separate page.
- See real-time updates to product stock levels.
- Enjoy Material Design–inspired UI components and beautiful icons.

## Features

- **Responsive UI:** Built with MDB UI Kit for Material Design styling.
- **Dynamic Product List:** Generates _n_ products with random prices and stock.
- **Shopping Cart Functionality:** Add, remove, and adjust quantities of items in the cart.
- **Local Storage Persistence:** Keeps cart and product stock data between sessions.
- **Alerts:** Uses Material Design–styled alerts (via MDB) for user feedback.
- **Modern JavaScript:** ES Modules, arrow functions, and dynamic DOM manipulation.

## Technologies Used

- HTML5, CSS3
- JavaScript (ES6+)
- [MDB UI Kit](https://mdbootstrap.com/docs/standard/)
- [Font Awesome 6](https://fontawesome.com/)
- Local Storage API

## Project Structure
```
ecma-shopping-cart/
├── index.html // Products page with a Material Design header and product cards.
├── cart.html // Cart page to view and manage cart items. ├── styles.css // Custom styles (optional).
├── main.js // JavaScript for the products page.
├── cartPage.js // JavaScript for the cart page.
├── cart.js // Contains the ShoppingCart class with methods to manage cart items.
└── products.js // Provides product data (generates n products and stores in Local Storage).
```

## How to Run the Project
**Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd ecma-shopping-cart
   ```
***Serve the Files with a Local Web Server:***
- Using VS Code Live Server: Right-click on index.html and select "Open with Live Server".

***Open Your Browser:***
- Navigate to `http://localhost:PORT/index.html` (replace `PORT` with the port number provided by your server).

## JavaScript Function Explanations

### products.js

This module exports a list of products. It checks for existing product data in Local Storage; if none exists, it generates n products with random prices and stock levels.
 - **Anonymous Async Function (IIFE):**
   - ***Purpose***: Checks Local Storage for products. If not found, it creates a new list of products and saves it.
   - Key properties per product: `id`, `name`, `price`, and `stock`.

### cart.js

Defines the `ShoppingCart` class that manages the shopping cart state.
 - Constructor:
    - **Purpose**: Loads cart items from Local Storage.
 - addItem(product):
    - **Purpose**: Adds a product to the cart. If the product exists, increases the quantity.
 - decreaseItem(productId):
    - **Purpose**: Decreases the quantity of a cart item by 1. Removes the item if the quantity drops to zero.
 - removeItem(productId):
    - **Purpose**: Completely removes an item from the cart.
 - getItems():
    - **Purpose**: Returns a copy of the cart items array.
 - getTotalPrice():
    - **Purpose**: Calculates and returns the total price of items in the cart.
 - Private Methods:
    - `#saveToStorage()`: Saves the current cart state to Local Storage.
    - `#loadFromStorage()`: Loads the cart state from Local Storage.

### main.js
Handles the rendering of the products page and the “Add to Cart” functionality.

- **showAlert(message, type):**
    - ***Purpose:*** Creates and displays a Material Design–styled alert using MDB classes.
 - **Parameters:**
    - `message:` Text to display.
    - `type:` Type of alert (e.g., `"success"`, `"danger"`).
 - **renderProducts():**
    - ***Purpose:*** Renders product cards dynamically.
    - ***What It Does:***
        - Iterates through each product from `products.js`.
        - Generates a card with product details including name, price, stock, and an icon.
        - Adds an event listener to the “Add to Cart” button:
            - When clicked, decreases the product’s stock.
            - Updates Local Storage.
            - Calls `cart.addItem(product)`.
            - Displays an alert using `showAlert()`.
            - Re-renders the product list to update stock display.

### cartPage.js
Manages the cart page where users can view and adjust their cart.

 - **showAlert(message, type):**
    - ***Purpose:*** Similar to the function in main.js, it displays Material Design–styled alerts.
 - **renderCart():**
    - ***Purpose:*** Renders the cart items dynamically.
    - ***What It Does:***
        - Iterates through each item in the cart.
        - Displays each cart item using MDB card layout with:
            - Product name, price, and quantity.
            - Buttons for increasing (plus) and decreasing (minus) quantity.
            - A remove button to delete the item completely.
        - Adds event listeners:
            - ***Plus Button:*** Increases the product quantity if stock is available, decreases the product stock, updates storage, and re-renders the cart.
            - ***Minus Button:*** Decreases the cart quantity and increases product stock accordingly.
            - ***Remove Button:*** Removes the item from the cart, returns the entire quantity back to stock, updates storage, and re-renders the cart.
        - Updates the total price displayed.

# ECMAScript Overview

ECMAScript is the standardized specification that forms the foundation of JavaScript. This document provides an explanation of ECMAScript—its history, key features, evolution, and why it is important for modern web development.

## What is ECMAScript?

ECMAScript is a scripting language specification standardized by Ecma International. JavaScript is the most well-known implementation of ECMAScript. The standard defines the syntax, semantics, and behavior of the language, ensuring consistency across different platforms and engines (e.g., web browsers and Node.js).

## History of ECMAScript

- **ECMAScript 1 (1997):**
  The first edition that laid the groundwork for JavaScript's functionality.

- **ECMAScript 2 (1998):**
  Introduced minor editorial changes and corrections.

- **ECMAScript 3 (1999):**
  Brought significant improvements and became widely adopted. It included regular expressions, better string handling, new control statements, and more.

- **ECMAScript 5 (2009):**
  Added strict mode, JSON support, and a host of new methods for arrays, strings, and objects. It marked a significant improvement in the language's consistency and reliability.

- **ECMAScript 6 / ES2015 (2015):**
  A major update introducing features such as:
  - **Let & Const:** For block-scoped variables.
  - **Arrow Functions:** A concise syntax for writing functions.
  - **Classes:** Syntactic sugar over JavaScript's prototypal inheritance.
  - **Modules:** Allowing code organization via `import` and `export`.
  - **Template Literals:** For multi-line strings and embedded expressions.
  - **Promises:** For better asynchronous programming.
  - And many more improvements.

- **ES2016 and Beyond (ES2016, ES2017, ES2018, ES2019, ES2020, ES2021, ES2022):**
  Subsequent editions brought incremental improvements and new features like async/await, improved object handling, and additional syntactical enhancements. The ECMAScript standard continues to evolve with new proposals at various stages of the TC39 process.

## Key Features of ECMAScript

- **Modern Variable Declarations:**
  `let` and `const` provide block-level scoping, replacing the function-scoped `var`.

- **Arrow Functions:**
  Provide a shorter syntax for writing functions, making code cleaner and more concise.

- **Template Literals:**
  Allow developers to create multi-line strings and include embedded expressions using backticks (`` ` ``).

- **Destructuring Assignment:**
  Enables unpacking values from arrays or properties from objects into distinct variables.

- **Modules:**
  Support for `import` and `export` statements allows developers to organize code into reusable modules.

- **Classes:**
  Introduce a more intuitive and familiar syntax for object-oriented programming.

- **Promises & Async/Await:**
  Simplify asynchronous programming, making it easier to work with operations that involve delays or network requests.

- **Iterators and Generators:**
  Provide a way to define custom iteration behavior for objects.

## The ECMAScript Evolution Process

- **TC39 Committee:**
  The Technical Committee 39 (TC39) is responsible for evolving ECMAScript. Proposals for new features are discussed, refined, and eventually accepted into the standard.

- **Stages of Proposals:**
  ECMAScript proposals go through multiple stages (from Stage 0 to Stage 4) before they are officially included in the standard. This process ensures that only well-vetted features are adopted.

- **Annual Releases:**
  Since ES2015, ECMAScript has been updated annually. This regular cadence helps developers stay current with new features and improvements.

## Benefits of ECMAScript

- **Improved Syntax and Readability:**
  Modern ECMAScript features allow developers to write cleaner, more maintainable code.

- **Better Performance:**
  Advances in the language often lead to improvements in performance and efficiency across JavaScript engines.

- **Enhanced Functionality:**
  New features make it easier to handle asynchronous operations, data manipulation, and object-oriented programming.

- **Cross-Platform Consistency:**
  The standard ensures that JavaScript behaves the same way across different browsers and environments.

## Conclusion

ECMAScript is the backbone of JavaScript, driving the language’s evolution and innovation. Its continuous development through the TC39 process brings powerful new features that make JavaScript more expressive, efficient, and easier to use. Staying informed about the ECMAScript standard is essential for modern web development.
