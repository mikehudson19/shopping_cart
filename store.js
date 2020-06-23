class CartItem {
  constructor(image, item, price) {
    this.image = image;
    this.item = item;
    this.price = price;
  }
  }
  



document.querySelectorAll('.shop-item-button').forEach(obj => {
  obj.addEventListener('click', (e) => {
    const itemName = e.target.parentElement.parentElement.firstElementChild.innerText;
    const itemImage = e.target.parentElement.parentElement.children[1].getAttribute('src');
    let itemPrice = e.target.previousElementSibling.innerText.slice(1);
    itemPrice = parseFloat(itemPrice);

    const item = new CartItem(itemImage, itemName, itemPrice);

    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');
    const array = Array.from(cartRows);
    const newArray = array.filter((row) => {
      if (row.firstElementChild.firstElementChild.nextElementSibling.innerText == item.item)return item.item;
    })
    if (newArray.length > 0) {
      alert('You have already added this item to your cart')
    } else {
      addToCart(item);
      calculateTotalPrice();
      detectChange();
    }
    
})
})



function addToCart(item) {
  const cartItemContainer = document.getElementsByClassName('cart-items')[0];
  const cartRows = cartItemContainer.getElementsByClassName('cart-row');

  
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
    cart.appendChild(cartRow);  
}




function calculateTotalPrice() {
  const cartItemContainer = document.getElementsByClassName('cart-items')[0];
  const cartRows = cartItemContainer.getElementsByClassName('cart-row');
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


function detectChange() {
const cartItemContainer = document.getElementsByClassName('cart-items')[0];
const cartRows = cartItemContainer.getElementsByClassName('cart-row');
for (let i = 0; i < cartRows.length; i++) {
  const cartRow = cartRows[i];
  const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
  quantityElement.addEventListener('change', () => {
    if (quantityElement.value == 0) {
      alert('You cannot select zero items')
      quantityElement.value = 1;
    } else {
      calculateTotalPrice();
    }
  })
}
}

function removeItem() {
  document.addEventListener('click', (e) => {
    if (e.target.className.includes('btn-danger')) {
      e.target.parentElement.parentElement.remove();
      calculateTotalPrice();
    }
  })
}

removeItem();




