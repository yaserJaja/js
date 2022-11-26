let title = document.getElementById("title");
let price = document.getElementById("price");
let update = document.getElementById("update");
let updateForm = document.getElementById("updateForm");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

getProducts(`http://localhost:9000/products/${id}`, (product) => {
  title.value = product.title;
  price.value = product.price;
  document.getElementById("id").innerHTML += id;
});

updateForm.onsubmit = function () {
  updateProduct(
    `http://localhost:9000/products/${id}`,
    id,
    title.value,
    price.value
  );
  return false;
};

update.onclick = function () {
  location.href = "../pages/Products.html";
};
