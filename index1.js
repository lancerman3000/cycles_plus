"use strict";

console.clear();
const array0 = [9, 2, 34, -5, 30, 344, -56, 75, 6, 8, -95, 6, 4, 99, -344, 56, 56, ];


console.log(`// 1. Есть массив состоящий из N цифр.Необходимо создать второй массив состоящий из всех четных чисел исходного массива.`);

let taskOneArray = array0.filter(arrayItem => !(arrayItem % 2));
console.log(taskOneArray);
console.log();

console.log(`// 2. Есть массив состоящий из N цифр. Необходимо найти сумму максимального и минимального числа`);
let taskTwoTmpArray = array0.slice();
let taskTwoArray = taskTwoTmpArray.sort((a, b) => a - b);
let taskTwoResult = taskTwoArray[0] + taskTwoArray[taskTwoArray.length - 1];
console.log(`array ${taskTwoArray}`);
console.log(`${taskTwoArray[0]} + ${taskTwoArray[taskTwoArray.length - 1]} = ${taskTwoResult}`);
console.log();
console.log(`// 3. Есть массив состоящий из N цифр. Необходимо перевурнуть массив не используя стандартную функцию для переворота !! без выделения дополнительного массива!!.`);
let taskThreeArray = [];
for (let i = array0.length - 1; i >= 0; i--) {
    taskThreeArray.push(array0[i]);
}
console.log(`primordial array: ${array0}`);
console.log(`inverted array: ${taskThreeArray}`);
console.log();
console.log(`// 4. Есть массив состоящий из N цифр. Необходимо удалить их массива все значения, которые делятся без остатка на 5
`);
let taskFourArray = array0.filter(arrayItem => (arrayItem % 5));
console.log(`primordial array: ${array0}; ${array0.length} elements`);
console.log(`new array: ${taskFourArray}; ${taskFourArray.length} elements`);
console.log();
console.log(`// 5. Есть массив состоящий из N цифр. Необходимо сгенерировать новый массив по правилу, что все положительные числа делятся на 1.5, а отрицательные умножаются на -1.9`);
let taskFiveArray = array0.map(currentValue => {
    if (!(currentValue % 2)) {
        currentValue *= 1.5;
    }
    if (currentValue < 0) {
        currentValue *= (-1.9);
    }
    return currentValue;
});
console.log(`primordial array: ${array0}`);
console.log(`modified array: ${taskFiveArray}`);