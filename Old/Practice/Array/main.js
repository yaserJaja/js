let submit = document.getElementById("submit");
let title = document.getElementById("title");
let numberOfPages = document.getElementById("numberOfPages");
let srcImage = document.getElementById("srcImage");
let author = document.getElementById("author");
let tbody = document.getElementById("tbody");

console.log(submit);
console.log(title);
console.log(numberOfPages);
console.log(srcImage);
console.log(author);

let allData = [];

submit.onclick = () => {
 let data = {
  title: title.value,
  numberOfPages: numberOfPages.value,
  srcImage: srcImage.value,
  author: author.value,
 }
 allData.push(data);
 let tr = document.createElement("tr");
 let id = document.createElement("td");
 let t = document.createElement("td");
 let s = document.createElement("td");
 let a = document.createElement("td");
 let n = document.createElement("td");
 let c = document.createElement("td");
 let show = document.createElement("a");
 let remove = document.createElement("a");
 let update = document.createElement("a");
 for (let i = 0; i < allData.length; i++) {
  show.className = "btn btn-primary me-1";
  show.href = "#";
  show.innerHTML = "Show";
  remove.className = "btn btn-danger me-1";
  remove.href = "#";
  remove.innerHTML = "Delete";
  update.className = "btn btn-success me-1";
  update.href = "#";
  update.innerHTML = "Update"; 
  c.appendChild(show);
  c.appendChild(remove);
  c.appendChild(update);
  id.innerHTML = i+1;
  t.innerHTML = allData[i].title;
  n.innerHTML = allData[i].numberOfPages;
  s.innerHTML = allData[i].srcImage;
  a.innerHTML = allData[i].author;
  console.log(t.innerHTML);
  tr.appendChild(id);
  tr.appendChild(t);
  tr.appendChild(s);
  tr.appendChild(a);
  tr.appendChild(n);
  tr.appendChild(c);
 }
 tbody.append(tr);
}

