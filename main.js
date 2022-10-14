const userName = prompt("Ведите имя");
const lastName = prompt("Ведите Фамилию");

alert( "Здраствуйте" + userName );


const firstname = ("Ведите имя");
const faltname = ("Ведите фамилию");
// console.log("Здраствуйте" + lastname);

/*------2------*/


const arr1 = Number(prompt("Ведите первое число"))
const arr2 = Number(prompt("Ведите второе число"))

if (arr1 < arr2) {
    alert(arr2 + "больше" + arr1)
}else if (arr1 === arr2) {
    alert("Числа равны")
}else if (arr1 > arr2) {
    alert (arr1 + "больше" +arr2)
}

  
/*------2------*/


const color = prompt ("Укажите цвет: зеленый, красный, желтый")
const colorList = [
{name: red = ("Красный")},
{name: green = ("Зеленый")},
{name: yellow = ("Желтый")}
];

// if (color === red) {
//  alert("Стоять")
// } else if (color === green) {
//  alert("Идти")
// } else if (color === yellow) {
//  alert("Ждать")
// }


let a;
switch(a) {
    case red:
    alert("Стоять");
    break;
    case green:
    alert ("Идти");
    break;
    case yellow:
    alert("Ждать");
}