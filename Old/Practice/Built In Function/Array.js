function indexOf(searchValue, array) {
  for (let i = 0; i <= array.length; i++) {
    if (searchValue === array[i]) {
      return i;
    }
  }
  return -1;
}

let numbers = [1, 2, 3, 1];
console.log(indexOf(1, numbers));