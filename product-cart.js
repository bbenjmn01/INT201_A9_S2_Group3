let productInCart = [];

let updateCartAmount = document.querySelector("#allProductInCart");
let deleteCartAmount = document.querySelector("#deleteProductInCart");
deleteCartAmount.addEventListener("click", deleteAllProductInCart);

if(localStorage.getItem('cart') === null) {
  localStorage.setItem('cart', JSON.stringify(productInCart));
} else {
  productInCart = JSON.parse(localStorage.getItem('cart', JSON.stringify(productInCart)));
}

updateCartAmount.textContent = `Your Cart: ${countProductInCart()}`;

// add new product to cart
export function addProductToCart(event) {
  let getProductId = event.target.parentNode.parentNode.id;
  let checkProductId = productInCart.filter(
    (checkId) => checkId.cartProductId == getProductId
  );
  if (checkProductId == false) {
    alert(`Add ${getProductId} to cart !`);
    productInCart.push({
      cartProductId: getProductId,
      qty: 1,
    });
  } else {
    alert(`Add ${getProductId} to cart !`);
    productInCart[
      productInCart.findIndex((findId) => findId.cartProductId == getProductId)
    ].qty++;
  }
  updateCartAmount.textContent = `Your Cart: ${countProductInCart()}`;
  localStorage.setItem('cart', JSON.stringify(productInCart));
  console.log(productInCart);
}

// count all product in cart
export function countProductInCart() {
  let sum = Object.values(productInCart).reduce((t, {qty}) => t + qty, 0);
  return sum;
}

// delete all product in cart
function deleteAllProductInCart() {
  alert(`Delete all produt in cart`);
  productInCart = [];
  updateCartAmount.textContent = `Your Cart: ${productInCart.length}`;
  localStorage.setItem('cart', JSON.stringify([]))
  console.log(productInCart);
}