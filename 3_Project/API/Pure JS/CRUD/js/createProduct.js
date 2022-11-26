let title = document.getElementById("title");
let price = document.getElementById("price");
let createForm = document.getElementById("createForm");
let create = document.getElementById("create");

createForm.onsubmit = function () {
  createProduct("http://localhost:9000/products", title.value, price.value);
  return false;
};

create.onclick = function () {
  location.href = "../pages/Products.html";
};
