import { products } from "./products.js";
import { addProductToCart, createCookie } from "./product-cart.js";
import { searchProductName, filter } from "./product-search.js";
// import { CookieUtil } from "./cookie.js";

// header
const divHeader = document.querySelector("#header");
divHeader.setAttribute(
  "class",
  `flex w-full text-gray-900 text-4xl text-bold justify-center pt-10`
);
// divHeader.setAttribute(
//   "style",
//   "font-family: 'Prompt', sans-serif; font-size: 3em;"
// );
divHeader.textContent = "iPhone รุ่นไหนที่ใช่สำหรับคุณ";

let bg = document.querySelector("body");
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");
let theme = localStorage.getItem("theme");
if (theme == "dark") {
  darkTheme();
} else {
  lightTheme();
}

function darkTheme() {
  divHeader.setAttribute(
    "style",
    "font-family: 'Prompt', sans-serif; font-size: 3em; color: white;"
  );
  bg.style.backgroundColor = "#828282";
  dark.style.backgroundColor = "#A0A0A0";
  light.style.backgroundColor = "#D1D5DB";
}

function lightTheme() {
  divHeader.setAttribute(
    "style",
    "font-family: 'Prompt', sans-serif; font-size: 3em; color: black;"
  );
  bg.style.backgroundColor = "#F3F4F6";
  light.style.backgroundColor = "#A0A0A0";
  dark.style.backgroundColor = "#D1D5DB";
}

dark.addEventListener("click", function () {
  darkTheme();
  localStorage.setItem("theme", "dark");
});

light.addEventListener("click", function () {
  lightTheme();
  localStorage.setItem("theme", "light");
});

// products
const divProducts = document.querySelector("#products");
divProducts.setAttribute(
  "class",
  `mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8`
);
divProducts.setAttribute("style", "margin-bottom: 5%;");

// show all product with for-loop
showProducts();

function showProducts() {
  for (const pd of products) {
    let divEachProduct = document.createElement("div");
    divEachProduct.setAttribute("id", pd.product_id);
    divEachProduct.setAttribute("class", "product");

    let divName = document.createElement("div");
    divName.setAttribute("class", "mt-4 flex justify-center text-3xl");
    divName.textContent = pd.product_name;
    divEachProduct.appendChild(divName);

    let pStock = document.createElement("p");
    pStock.setAttribute("class", "mt-1 flex justify-center");
    pStock.textContent = pd.stock > 0 ? `Stock : ${pd.stock}` : `Out Of Stock`;
    divEachProduct.appendChild(pStock);

    let divImage = document.createElement("div");
    divImage.setAttribute(
      "class",
      "w-full min-h-80 transition duration-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none cursor-pointer"
    );
    let imgElem = document.createElement("img");
    imgElem.setAttribute("src", pd.product_image);
    imgElem.setAttribute(
      "class",
      "w-full h-full object-center object-cover lg:w-full lg:h-full"
    );
    divImage.appendChild(imgElem);
    divEachProduct.appendChild(divImage);

    let divPriceAdd = document.createElement("div");
    divPriceAdd.setAttribute("class", "mt-4 flex justify-between");

    let divPrice = document.createElement("div");
    divPrice.setAttribute("class", "mt-2 text-2xl text-gray-900 pr-10");
    divPrice.textContent = `${pd.product_price}฿`;

    let add = document.createElement("button");
    if (pd.stock > 0) {
      add.setAttribute("type", "submit");
      add.setAttribute(
        "class",
        "mt-0 w-full bg-blue-500 transition duration-200 border border-transparent rounded-2xl py-3 px-3 flex items-center justify-center text-base font-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      );
      add.textContent = "Add to Cart";
      add.addEventListener("click", addProductToCart);
      add.addEventListener("click", createCookie);
    } else {
      add.setAttribute(
        "class",
        "mt-0 w-full bg-gray-300 rounded-2xl py-3 px-3 flex items-center justify-center text-base font-sm text-white"
      );
      add.textContent = "Out Of Stock";
    }

    divPriceAdd.appendChild(divPrice);
    divPriceAdd.appendChild(add);
    divEachProduct.appendChild(divPriceAdd);
    divProducts.appendChild(divEachProduct);
  }
}

document
  .querySelector("#searchBox")
  .addEventListener("keyup", searchProductName);

document.querySelector("#searchBox").addEventListener("keyup", filter);
