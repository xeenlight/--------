let addButton = document.querySelector(".add-product");
let productList = document.querySelector(".products-list");
addButton.addEventListener("click", addProduct);
let productArray = [];

function addProduct() {
  let productType = document.querySelector("#type-select").value;
  let productName = document.querySelector("#product-name").value;
  let productCount = document.querySelector("#product-count").value;

  let obj = {
    type: productType,
    name: productName,
    count: productCount,
  };
  productArray.push(obj);
  updateProductList();
}
function updateProductList() {
  productList.innerHTML = "";
  productArray.forEach((e, i) => {
    let productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.innerHTML = `
            Тип: ${e.type} Название: ${e.name} Количество: ${e.count}
            <button class="delete" onclick="btnClick(${i})">Удалить</button>
        `;
    productList.appendChild(productItem);
  });
}
function btnClick(index) {
  productArray.splice(index, 1);
  updateProductList();
}