let tbody = document.getElementById("tbody");

getProducts("http://localhost:9000/products", (products) => {
  if (tbody) {
    products.map((product) => {
      tbody.innerHTML += `
        <tr>
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td>
            <button class="del btn btn-danger btn-sm me-1" data-id=${product.id}>Delete</button>
            <a href='readProduct.html?id=${product.id}' class="btn btn-info btn-sm me-1">View</a>
            <a href='updateProduct.html?id=${product.id}' class="btn btn-primary btn-sm">Edit</a>
          </td>
        </tr>
      `;
    });
  }
  let del = document.querySelectorAll(".del");
  del.forEach((ele) => {
    ele.onclick = function () {
      let id = ele.dataset.id;
      deleteProduct(`http://localhost:9000/products/${id}`, id);
      location.reload();
    };
  });
});
