document.addEventListener('DOMContentLoaded', () => {
  const cart = localStorage.getItem('cart');
  const ffiv = document.querySelector('.cart-items');
  ffiv.innerHTML = cart;

})