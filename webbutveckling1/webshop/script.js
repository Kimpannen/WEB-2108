let ShoppingCart = (function ($) {
    "use strict";
    // Dom Elements
    let productsEl = document.querySelector(".products"),
        cartEl =     document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price");
    // Fake JSON data array here should be API call
    // Product here
    productsInCart = [];
    // Here i have used template strings (ES6 feature)
    let generateProductList = function ()  {
        products.forEach(function(item) {
            let productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `<div class="product-image">
            <img src="${item.imageUrl}" alt="${item.name}">
                </div>
                <div class="product-name"><span>Product:</span> ${
                item.name}</div>
                <div class="product-description"><span>Description:</span> ${
                item.description}</div>
                
            }
                
              9:27
</span>

        }
    }
}