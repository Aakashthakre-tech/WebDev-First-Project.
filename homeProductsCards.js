const productContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector('#productTemplate')

export const showProductContainer = (products) => {
  if (!products) return;

  products.forEach((curProd) => {
    const { id, image, name, price, stock,description,category } = curProd;
    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productPrice").textContent = `₹Prize:${price}`;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".category").textContent = category;
    


    // Extra: live total price for selected quantity
    let quantityElem = productClone.querySelector(".productQuantity");
    let totalPriceElem = productClone.querySelector(".productTotalPrice"); // new element in template
    let quantity = 0;

    // Initialize
    quantityElem.textContent = quantity;
    if (totalPriceElem) {
      totalPriceElem.textContent = `Total: ₹${price * quantity}`;
    }

    // Increase quantity
    productClone.querySelector(".cartIncrement").addEventListener("click", () => {
      if (quantity < stock) {
        quantity++;
        quantityElem.textContent = quantity;
        if (totalPriceElem) {
          totalPriceElem.textContent = `Total: ₹${price * quantity}`;
        }
      }
    });

    // Decrease quantity
    productClone.querySelector(".cartDecrement").addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityElem.textContent = quantity;
        if (totalPriceElem) {
          totalPriceElem.textContent = `Total: ₹${price * quantity}`;
        }
      }
    });

    // Add to Cart
    productClone.querySelector(".add-to-cart-button").addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let existing = cart.find(item => item.id === id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({ id, name, image, price, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    });

    productContainer.append(productClone);
  });
};

// Navbar cart count
export function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector("#cartValue i").textContent = totalItems;
}
