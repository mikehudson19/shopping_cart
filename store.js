class CartItem {
  constructor(image, item, price) {
    this.image = image;
    this.item = item;
    this.price = price
  }
}

class Cart {
  constructor(item) {
    this.item = item;
  }
}

const shoppingCart = [];

document.querySelectorAll('.shop-item-button').forEach(obj => {
  obj.addEventListener('click', (e) => {
    const itemName = e.target.parentElement.parentElement.firstElementChild.innerText;
    const itemImage = e.target.parentElement.parentElement.children[1].getAttribute('src');
    const itemPrice = e.target.previousElementSibling.innerText.slice(1);
  
    const item = new CartItem(itemImage, itemName, itemPrice);

    addToCart(item);

})
})



function addToCart(item) {
  const cartRow = document.createElement('div');
  cartRow.className = 'cart-row';
  
const html = 
  `
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${item.image}" width="100" height="100">
      <span class="cart-item-title">${item.item}</span>
    </div>
    <span class="cart-price cart-column">$${item.price}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
  `;

  cartRow.innerHTML = html;
  const cart = document.querySelector('.cart-items');
  cart.after(cartRow);

  // Add item to the Shopping Cart Array
  shoppingCart.push(item);
  console.log(shoppingCart)


}



 