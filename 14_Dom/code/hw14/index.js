// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.textContent="Я изменю тебя";
clonedBtn.style.color = "#ffffff";
clonedBtn.style.backgroundColor = "#a78b71";

btn.addEventListener('click', () => {
    console.log("click");
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь

    document.body.appendChild(clonedBtn);
  
})

// здесь можете создать EventListener для второй кнопки

clonedBtn.addEventListener('click',()=>{
    console.log("clone click");
    btn.style.backgroundColor = '#9c4a1a';
    btn.style.color = "#000000";

})



/*По клику на кнопку Нажми на меня, добавьте новую кнопку с id="magic-btn-2" и с текстом "Я изменю тебя" со стилями:
background-color:  #a78b71; ( * в js будет backgroundСolor * )
color: white;
Поменяйте стили кнопки magic-btn по клику на кнопку "Я изменю тебя" на:
цвет фона на #9c4a1a;
цвет текста на черный; То есть, другими словами, нужно поменять стили исходной кнопки при нажатии на появившуюся кнопку.
В файле index.js:

Кнопку получить можно через const btn = document.querySelector('#magic-btn')
Добавить новую кнопку в body можно через document.body.appendChild(elem);
Поменять стили можно через объект style. Н-р: elem.style.color = "black"
Для клика можно использовать btn.addEventListener('click', () => {}).
Кнопка "Я изменю тебя" должна добавляться ТОЛЬКО после клика на кнопку "Нажми на меня!"*/