// Create Data:
function createProduct(url, title, price) {
  let req = new XMLHttpRequest();
  req.open("POST", url);
  req.setRequestHeader("Content-Type", "application/json");
  req.setRequestHeader("Accept", "application/json");
  let body = JSON.stringify({
    title,
    price,
  });
  req.send(body);
}

// Update Data:
function updateProduct(url, id, title, price) {
  let req = new XMLHttpRequest();
  req.open("PUT", url);
  req.setRequestHeader("Content-Type", "application/json");
  let body = JSON.stringify({
    id,
    title,
    price,
  });
  req.send(body);
}

// Read Data:
function getProducts(url, callback) {
  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.responseType = "json";
  req.send();
  req.onload = function () {
    if (req.status >= 200 && req.status < 300) callback(this.response);
  };
}

// Delete Data
function deleteProduct(url, id) {
  let req = new XMLHttpRequest();
  req.open("DELETE", url);
  req.send();
}
