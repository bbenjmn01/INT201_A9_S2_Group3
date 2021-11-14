import { products } from "./products.js";

function searchProductName(e) {
  let text = e.target.value.toLowerCase();
  console.log(text);
  for (const pd of products) {
    let productName = pd.product_name;
    if (!productName.toLowerCase().includes(text)) {
      document.querySelector(pd.product_id).style.display = "none";
    }
  }
}

function filter(e) {
  let filterProduct = document.querySelectorAll(".product");
  let text = e.target.value;
  console.log(text);
  for (let i = 0; i < filterProduct.length; i++) {
    let productName = products[i].product_name;
    if (productName.toLowerCase().trim().includes(text.toLowerCase())) {
      filterProduct[i].style.display = "";
    } else {
      filterProduct[i].style.display = "none";
    }
  }
}

export { searchProductName, filter };
