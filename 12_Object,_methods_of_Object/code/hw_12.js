/*Задание 1
Создайте метод, который принимает объект, а возвращает новый объект, в котором ключи и значения поменялись местами.
{name: "Bob"} --> {"Bob": "name"} //(вам понадобится поработать с Object.values, Object.keys ) */

const obj = {
  name: "Bob",
};

console.log(reverse(obj));

function reverse(object) {
  
    const reverseObject = {
    [Object.values(object)]: Object.keys(object),
  };

  return reverseObject;
}

/*Задание 2
Создайте объект дуб oak с полем высота height и полем год year и методом расти grow. Пусть изначальная высота дуба будет 140 см, а год будет 2025. 
При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий. Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.*/

const oak = {
    name : "oak",
    height : 140,
    year : 2025,
    grow(){
        
        this.height += 30,
        this.year++,
        console.log(`${this.name}: I'm growing! Year = ${this.year} : ${this.height}`);
    },
}

for (let i = 0; i < 20; i++) {
    oak.grow();
}

/*Задание 3 дополнительное!
Попробуйте сохранить метод grow во внешнем от объекта контексте и вызвать его с другими растениями при помощи bind или apply.*/

console.log("---------- apply ------------");

oak.grow.apply( {name: "Bamboo", height : 200, year : 2026} );
console.log("----------- bind -----------");
const banana = { 
    name: "Banana",
    height : 100,
    year : 2024,
 };

const growBanana = oak.grow.bind(banana);

for (let i = 0; i < 5; i++) {
    growBanana();
}
