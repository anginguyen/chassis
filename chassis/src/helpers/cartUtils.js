export function addToCart(item, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    // If already in cart, increase the quantity 
    let itemIndex = cart.findIndex(e => e.id === item.id);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += quantity;
    }
    else {
        item['quantity'] = quantity;
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

export function incrementQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let itemIndex = cart.findIndex(item => item.id === id);
    cart[itemIndex].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function decrementQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let itemIndex = cart.findIndex(item => item.id === id);
    cart[itemIndex].quantity--;
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function deleteFromCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter((e) => e.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function getPriceSummary() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart.length === 0) return [ (0).toFixed(2), (0).toFixed(2), (0).toFixed(2), (0).toFixed(2) ]

    const subtotal = cart.reduce((total, curr) => total = total + curr.quantity * curr.price, 0).toFixed(2);
    const fees = ((subtotal * 0.1025) + (subtotal * 0.07)).toFixed(2);
    const shipping = (2).toFixed(2);
    const total = (parseFloat(subtotal) + parseFloat(fees) + parseFloat(shipping)).toFixed(2);

    return [ subtotal, fees, shipping, total ]
}