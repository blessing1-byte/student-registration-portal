//creating an object
/*
create a product
image, name, brand, type, price, numberOfProductInStock, isAvailable

*/
const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1632221522866-bf40bad1db53?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Body Lotion",
    brand: "Nivea",
    type: "Body milk",
    price: 3000,
    numInStock: 10,
    isAvailable: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1752327091116-64c11c6521db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lip Balm",
    brand: "Nivea",
    type: "Watermelon Shine",
    price: 400,
    numInStock: 0,
    isAvailable: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1752327091116-64c11c6521db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lip Balm",
    brand: "Nivea",
    type: "Watermelon Shine",
    price: 400,
    numInStock: 0,
    isAvailable: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1752327091116-64c11c6521db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lip Balm",
    brand: "Nivea",
    type: "Watermelon Shine",
    price: 400,
    numInStock: 0,
    isAvailable: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1752327091116-64c11c6521db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lip Balm",
    brand: "Nivea",
    type: "Watermelon Shine",
    price: 400,
    numInStock: 0,
    isAvailable: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1752327091116-64c11c6521db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lip Balm",
    brand: "Nivea",
    type: "Watermelon Shine",
    price: 400,
    numInStock: 0,
    isAvailable: false,
  },
];
//creating multiple object
// array of object
// const products = [
//     {}, {}, {} ,{} ....
// ]

const productPage = document.getElementById("product-page");

const renderProduct = () => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-listing");

  products.forEach((product) => {
    productCard.innerHTML += `
    <div class="product-card">
    
            <img src=${product.image}
                alt="product image" class="product-image">

            <h3>${product.name}</h3>
            <h5>Brand : ${product.brand}</h5>
            <p>${product.type}</p>
            <span>price: $${product.price}</span>
            <p>available item: ${product.numInStock}</p>
      </div>
  `;
  });

  productPage.appendChild(productCard);
};

renderProduct();
