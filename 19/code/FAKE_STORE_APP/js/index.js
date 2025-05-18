//[GET] https://api.escuelajs.co/api/v1/products
const container = document.querySelector(".container");
const btn = document.getElementById("btn-show-products");

async function fetchProduct() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await res.json();

  products.forEach(({ images, title, price, description } = product) => {
    const cardElem = document.createElement("div");
    const titleElem = document.createElement("p");
    const descElem = document.createElement("p");
    const priceElem = document.createElement("p");

    const imgElem = document.createElement("img");
      imgElem.src = images[0];
       imgElem.alt = title;
    
    titleElem.innerText = `Title: ${title}`;
    descElem.innerText = `description: ${description}`;
    priceElem.innerText = `price: ${price}`;

    //cardElem.style.backgroundColor = rating.average == 4.8 ? "lightblue" : "lightgreen";
    cardElem.append(titleElem, imgElem, descElem, priceElem);
    container.append(cardElem);
    // });

    //console.log(title);
    //
  });
}

btn.addEventListener("click",fetchProduct);
