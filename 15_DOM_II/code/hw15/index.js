// Создайте страницу, на которой можно добавить животное в список животных. Соответственно, вам понадобится использовать форму, в которой вы уточните у пользователя кличку животного "nickname", возраст "age" и породу "breed".
// П.С. Выводите каждый шаг в консоль, чтобы сразу увидеть ошибку. Имеет смысл сначала сделать с одним полем, а потом добавить и остальные.
//==============================================================
const nicknameInput = document.getElementById("nickname");
const ageInput = document.getElementById("age");
const breedInput = document.getElementById("breed");
const animalsContainer = document.getElementById("animals-container");
const btnAddAnimal = document.getElementById("btn-add-animal");
const messageError = document.getElementById("message-error");

let animals = [];

function renderAnimals() {
  while (animalsContainer.firstChild) {
    animalsContainer.remove(animalsContainer.firstChild);
  }

  animals.forEach((animal) => {
    const animalCard = document.createElement("div");
    animalCard.innerHTML = `<span>${animal.nickname}</span>,
                                <span>${animal.age}</span>,
                                <span>${animal.breed}</span>`;
  });
}

//renderAnimals(animals);

function addAnimalToList(event) {
  
  event.preventDefault();

  const formIsNotValid = validateForm();

  console.log(formIsNotValid === 0);

  if (formIsNotValid === 0) {
    animals.push({
      nickname: nicknameInput.value,
      age: ageInput.value,
      breed: breedInput.value,
    });

    renderAnimals(animals);
    //console.log(animals);
   
    nicknameInput.value = "";
    ageInput.value = "";
    breedInput.value = "";
    messageError.innerText = "";
  } else if (formIsNotValid === 1) {
    messageError.innerText = "Error: Nickname is empty";
  } else if (formIsNotValid === 2) {
    messageError.innerText = "Error: Age is empty";
  } else if (formIsNotValid === 3) {
    messageError.innerText = "Error: Breed is empty";
  }
}

//console.log(nicknameInput.value);

btnAddAnimal.addEventListener("click", addAnimalToList);

function renderAnimals(animals) {
  console.log(animalsContainer.firstChild);
  // очищаем предыдущий рендер
  while (animalsContainer.firstChild) {
    animalsContainer.removeChild(animalsContainer.firstChild);
  }
  // заново наполняем родителя карточками
  animals.forEach((animal) => {
    const animalCard = document.createElement("div");
    animalCard.innerHTML = `<span>${animal.nickname}</span>, <span>${animal.age}</span>, <span>${animal.breed}</span>`;
    animalsContainer.appendChild(animalCard);
  });
}

//валидация полей ввода
function validateForm() {
  if (nicknameInput.value === "") {
    return 1;
  } else if (ageInput.value === "") {
    return 2;
  } else if (breedInput.value === "") {
    return 3;
  } else return 0;
}
