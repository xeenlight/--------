let addButton = document.querySelector(".add-product");
let productList = document.querySelector(".products-list");
let clearButton = document.querySelector(".clear-list");

addButton.addEventListener("click", addProduct);
clearButton.addEventListener("click", clearProductList);

let productArray = [];

function addProduct(){
    let productType = document.querySelector("#type-select").value;
    let productName = document.querySelector("#product-name").value;
    let productCount = document.querySelector("#product-count").value;
    let productString = "";
    let obj = {}
    obj.type=productType
    obj.name=productName
    obj.count=productCount
    productArray.push(obj)
    productArray.forEach((e,i)=>{
        productString += `<div class="product-item">
        Тип: ${e.type} Название: ${e.name} Количество: ${e.count}
        <button class="delete" onclick={btnClick(${i})}>Удалить</button>
        </div>`
    })
    productList.innerHTML=productString
}
function btnClick(e){
    let array = productArray.filter((value,i) =>(e!=i))
    productArray=array
    let productString ="";
    productArray.forEach((e,i)=>{
        productString += `<div class="product-item">
        Тип: ${e.type} Название: ${e.name} Количество: ${e.count}
        <button class="delete" onclick={btnClick(${i})}>Удалить</button>
        </div>`
    })
    productList.innerHTML=productString
}
function renderProductList() {
    let productString = "";
    productArray.forEach((e, i) => {
        productString += `<div class="product-item">
        Тип: ${e.type} Название: ${e.name} Количество: ${e.count}
        <button class="delete" onclick="btnClick(${i})">Удалить</button>
        </div>`;
    });
    productList.innerHTML = productString;
}

function clearProductList(){
    productArray = [];
    renderProductList();
}
