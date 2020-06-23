const cartItemContainer = document.getElementsByClassName('cart-items')[0];
const cartRows = cartItemContainer.getElementsByClassName('cart-row');

class CartItem {
  constructor(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
  }
  
// EVENT LISTENER : ADD TO CART BUTTON CLICKED 
document.addEventListener('click', (e) => {
  if (e.target.className.includes('shop-item-button')) {
    // Define the elements of the cart item
    const item = e.target.parentElement.parentElement;
    const itemName = item.firstElementChild.innerText;
    const itemImage = item.children[1].getAttribute('src');
    let itemPrice = item.querySelector('.shop-item-price').innerText.slice(1);
    itemPrice = parseFloat(itemPrice);

    const cartItem = new CartItem(itemImage, itemName, itemPrice);

    const cartItems = document.querySelectorAll('.cart-item-title');
    for (obj of cartItems) {
      if (obj.innerText === cartItem.name) {
        alert('You have already added this item to the cart.')
        return;
      } 
    }
      addToCart(cartItem);
      calculateTotalPrice();
    }
  })



// EVENT LISTENER : DETECT QUANTITY CHANGE
document.addEventListener('click', (e) => {
  if (e.target.className == 'cart-quantity-input') {
    detectChange(e);
    calculateTotalPrice();
  }
})


// EVENT LISTENER : REMOVE BUTTON CLICKED
  document.addEventListener('click', (e) => {
    if (e.target.className.includes('btn-danger')) {
      e.target.parentElement.parentElement.remove();
      calculateTotalPrice();
    }
  })


function addToCart(cartItem) {
  const cartRow = document.createElement('div');
  cartRow.className = 'cart-row';

  const html = 
    `
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${cartItem.image}" width="100" height="100">
        <span class="cart-item-title">${cartItem.name}</span>
      </div>
      <span class="cart-price cart-column">$${cartItem.price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
    `;
  
    cartRow.innerHTML = html;
    const cart = document.querySelector('.cart-items');
    cart.appendChild(cartRow);  
}


function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName('cart-price')[0];
    const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    const priceNumber = parseFloat(priceElement.innerText.slice(1))
    totalPrice = totalPrice + (priceNumber * quantityElement.value);
  }
  const totPrice = document.querySelector('.cart-total-price');
  totalPrice = totalPrice.toFixed(2);
  totPrice.innerHTML = `$${totalPrice}`
}


function detectChange(e) {
  if (e.target.value == 0) {
    alert('You cannot select zero items')
    e.target.value = 1;
  } 
}


 

// ALTERNATIVE EVENT LISTENER FOR ADD TO CART 
// document.querySelectorAll('.shop-item-button').forEach(obj => {
  //   obj.addEventListener('click', (e) => {
  //     const itemName = e.target.parentElement.parentElement.firstElementChild.innerText;
  //     const itemImage = e.target.parentElement.parentElement.children[1].getAttribute('src');
  //     let itemPrice = e.target.previousElementSibling.innerText.slice(1);
  //     itemPrice = parseFloat(itemPrice);
  
  //     const item = new CartItem(itemImage, itemName, itemPrice);
  
  //     const array = Array.from(cartRows);
  //     const cartArray = array.filter((row) => {
  //       if (row.firstElementChild.firstElementChild.nextElementSibling.innerText == item.item)return item.item;
  //     })
  
  //     if (cartArray.length > 0) {
  //       alert('You have already added this item to your cart')
  //     } else {
  //       addToCart(item);
  //       calculateTotalPrice();
  //     }
  //   })
  // })


// ALTERNATIVE EVENT LISTENER FOR DETECT CHANGE
// for (let i = 0; i < cartRows.length; i++) {
//   const cartRow = cartRows[i];
//   const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
//   quantityElement.addEventListener('change', detectChange);
//   }







