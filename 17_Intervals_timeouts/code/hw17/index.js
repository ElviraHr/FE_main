/*Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми, но структура такая же: три группы, разделённые точками и пробелом.
Цель: преобразовать строку к следующему формату: "1333 132:123-00"*/

const regex = /(\d{4}).(\d{3}).(\d{3})\s(\d{2})/;

function formatString(input) {
    return input.replace(regex, `$1 $2:$3-$4`)// Ваша реализация здесь
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"


/*Создайте Promise, который с одинаковой вероятностью (50/50):

либо возвращает строку "Best day of my life"
либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().*/

function getRandomNumber(max) {
    return Math.floor(Math.random()*max);
}         

const myDay = new Promise(function(res, rej){
    if(getRandomNumber(2)){
        res("Best day of my life");
    }
    rej(new Error("Something is off"));
})

myDay
.then((day) =>{
   console.log(day);
})
.catch((err) => {
  console.log(err);  
});
