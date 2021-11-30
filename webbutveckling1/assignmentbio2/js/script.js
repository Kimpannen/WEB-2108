let myCart = []

function itemAlreadyInCart(biljett) {
    for (const item of myCart) {
        if (item.biljett === biljett) {
            return true
        }
    }
    return false
}

function updateQuantity(biljett) {
    for (const item of myCart) {
        if (item.biljett === biljett) {
            item.quantity += 1
            return
        }
    }
}

function insertItemToCart(biljett) {
    myCart.push({
        biljett: biljett,
        quantity: 1
    });
}

function cartIsEmpty() {
    return myCart.length === 0
}

function addItemToCart(biljett) {
    if (cartIsEmpty()) {
        insertItemToCart(biljett);
    } else {
        if (itemAlreadyInCart(biljett)) {
            updateQuantity(biljett);
        } else {
            insertItemToCart(biljett);
        }
    }
    console.log(myCart)
}

function addButtonEventListeners(elementId) {
    document.getElementById(elementId)
        .addEventListener('click', function () {
            addItemToCart(elementId)
        });
}

window.addEventListener('load', function () {
    for (const ticket of tickets) {
        addButtonEventListeners(tickets.biljett)
    }
})





