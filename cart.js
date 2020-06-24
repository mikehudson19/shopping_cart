const cartItemContainer = document.getElementsByClassName('cart-items')[0];
const cartRows = cartItemContainer.getElementsByClassName('cart-row');

document.addEventListener('DOMContentLoaded', () => {
  

  const cart = retrieveTasks();
  for (let i = 0; i < cart.length; i ++) {
    addToCart(cart[i]);
  }
  calculateTotalPrice();



})


