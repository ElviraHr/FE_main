const productsContainer = document.getElementById("products-container");
const categoriesSelect = document.getElementById("category-select");
const filterForm = document.getElementById("filter-form");

let products = [];
fetchCategories();
fetchProducts();

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const categoryId = filterForm.elements["category"].value;
  fetchProducts(categoryId);
});

async function fetchProducts(categoryId) {
  const queryString = categoryId ? `/?categoryId=${categoryId}` : "";

  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products${queryString}`
    );
    const productsRes = await res.json();
    products = productsRes;
    renderProducts(products);
  } catch (err) {
    console.error(err);
  }
}

async function fetchDeleteProduct(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
  });
  console.log(res.ok);
}

function renderProducts(products) {
  while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.firstChild);
  }

  products.forEach((product) => {
    const { title, description, price, category, images, id } = product;
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const priceSpan = document.createElement("span");
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    const descriptionSpan = document.createElement("span");
    const productImg = document.createElement("img");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";
    deleteBtn.onclick = () => {
      //   console.log("Click id :" + id);
      fetchDeleteProduct(id);
      fetchProducts();
    };

    priceSpan.innerText = price + "$";
    titleSpan.innerText = title;
    descriptionSpan.innerText = description;

    productImg.src = images[0];
    // только из-за того, что корс не настроен
    productImg.referrerPolicy = "no-referrer";
    productImg.crossOrigin = "anonymous";

    productCard.append(
      titleSpan,
      priceSpan,
      productImg,
      descriptionSpan,
      deleteBtn
    );
   

    productsContainer.appendChild(productCard);
  });
}

async function fetchCategories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories = await res.json();
  // <option value="1">Clothes</option>

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.innerText = category.name;
    categoriesSelect.appendChild(option);
  });
}