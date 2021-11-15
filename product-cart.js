import { products } from "./products.js";
import { CookieUtil } from "./cookie.js";

let productInCart = [];

let updateCartAmount = document.querySelector("#allProductInCart");
let deleteCartAmount = document.querySelector("#deleteProductInCart");
deleteCartAmount.addEventListener("click", deleteAllProductInCart);

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
  updateCartAmount.textContent = `Your cart: ${countProductInCart()}`;
  console.log(productInCart);
}

export function createCookie() {
  CookieUtil.set("productInCart", productInCart, Date(86400));
  CookieUtil.set("amountProduct", countProductInCart(), Date(86400));
}

export function countProductInCart() {
  var sum = 0;
  for (let i = 0; i < productInCart.length; i++) {
    sum += productInCart[i].qty;
  }
  return sum;
}

function deleteAllProductInCart() {
  alert(`Delete all produt in cart`);
  CookieUtil.unset("cart");
  let setZeroCart = [];
  productInCart = setZeroCart;
  updateCartAmount.textContent = `Your cart: ${productInCart.length}`;
  console.log(productInCart);
}

function checkCookie(cart) {
  products.forEach((p) => {
    if (CookieUtil.get(productInCart) != null) {
      productInCart.push();
      //   cart.totalQty += parseInt(CookieUtil.get(p.nameEng));
    }
  });
}
