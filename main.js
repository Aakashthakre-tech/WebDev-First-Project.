
// const response = await fetch('./api/products.json');
// const products = await response.json();
// console.log(products);
// import { showProductContainer } from "./homeProductsCards.js";
// showProductContainer(products);


// import { showProductContainer, updateCartCount } from "./homeProductsCards.js";

// async function initProducts() {
//   const container = document.querySelector("#productContainer");
//   if (container) {
//     try {
//       const response = await fetch('./api/products.json');
//       const products = await response.json();
//       showProductContainer(products);
//     } catch (error) {
//       console.error("Error loading products:", error);
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   initProducts();
//   updateCartCount();
// });



import { showProductContainer, updateCartCount } from "./homeProductsCards.js";

async function initProducts() {
  const container = document.querySelector("#productContainer");
  if (container) {
    try {
      const response = await fetch('./api/products.json');
      const products = await response.json();
      showProductContainer(products);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initProducts();
  updateCartCount(); // Always update the cart icon on page load
});

