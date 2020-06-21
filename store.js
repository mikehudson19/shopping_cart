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
})
})




 