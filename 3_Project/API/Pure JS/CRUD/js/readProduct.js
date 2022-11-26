let title = document.getElementById("title");
let price = document.getElementById("price");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

getProducts(`http://localhost:9000/products/${id}`, (product) => {
  title.innerHTML += " " + product.title;
  price.innerHTML += " " + product.price;
});
