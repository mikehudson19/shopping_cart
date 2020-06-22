class CartItem {
  constructor(image, item, price) {
    this.image = image;
    this.item = item;
    this.price = price
  }
}

document.querySelectorAll('.shop-item-button').forEach(obj => {
  obj.addEventListener('click', (e) => {
    const itemName = e.target.parentElement.parentElement.firstElementChild.innerText;
    const itemImage = e.target.parentElement.parentElement.children[1].getAttribute('src');
    const itemPrice = e.target.previousElementSibling.innerText.slice(1);
  
    const item = new CartItem(itemImage, itemName, itemPrice);
    console.log(item);

    addToCart(item);

})
})

function addToCart(item) {
  const cartRow = document.createElement('div');
  cartRow.className = 'cart-row';
  // const cartItem = document.createElement('div');
  // cartItem.className = 'cart-item cart-column';
  // // Create the image element
  // const cartImg = document.createElement('img');
  // cartImg.setAttribute('src', item.image)
  // cartImg.setAttribute('width', 100)
  // cartImg.setAttribute('height', 100)
  // // Create the title element
  // const title = document.createElement('span');
  // title.className = 'cart-item-title';
  // title.innerText = item.item;
  // // Append image and title to column div
  // cartItem.appendChild(cartImg);
  // cartItem.appendChild(title);
  // // Create the price element
  // const price = document.createElement('span');
  // price.className = 'cart-price cart-column';
  // price.innerText = `$${item.price}`;
  // // Create the quantity column div
  // const cartQty = document.createElement('div');
  // cartQty.className = 'cart-quantity cart-column';
  // // Create the qauntity selector
  // const quant = document.createElement('input');
  // quant.className = 'cart-quantity-input'
  // quant.setAttribute('type', 'number')
  // quant.setAttribute('value', 1);
  // // Create the remove button
  // const removeBtn = document.createElement('button');
  // removeBtn.className = 'btn btn-danger';
  // removeBtn.setAttribute('type', 'button');
  // removeBtn.innerText = 'REMOVE';
  // // Append quantity and button to quantity column
  // cartQty.appendChild(quant);
  // cartQty.appendChild(removeBtn);
  
  // // Append to UI
  // cartRow.appendChild(cartItem);
  // cartRow.appendChild(price);
  // cartRow.appendChild(cartQty);

  
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

}




{/* <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="Images/Shirt.png" width="100" height="100">
                        <span class="cart-item-title">T-Shirt</span>
                    </div>
                    <span class="cart-price cart-column">$19.99</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div> */}


 