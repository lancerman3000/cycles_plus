console.clear();
const array0 = [9, 2, 34, -5, 30, 344, -56, 75, 6, 8, -95, 6, 4, 99, -344, 56, 56, ];


// 1. Есть массив состоящий из N цифр.Необходимо создать второй массив состоящий из всех четных чисел исходного массива.

let array0plus = [];
for (let i = 0; i < array0.length; i++) {
    if (!(array0[i] % 2)) {
        array0plus.push(array0[i])
    }
}
console.log('only even numbers');
console.log(array0plus);
console.log();

// 2. Есть массив состоящий из N цифр. Необходимо найти сумму максимального и минимального числа
let array1 = array0.slice();
let res1;
for (let n = 0; n < array1.length; n++) {
    for (let i = 0; i < array1.length - 1 - n; i++) {
        if (array1[i] > array1[i + 1]) {
            let buf = array1[i];
            array1[i] = array1[i + 1];
            array1[i + 1] = buf;
        }
    }
}
res1 = array1[0] + array1[array1.length - 1]

console.log('first and last = ' + res1);
console.log();


// 3. Есть массив состоящий из N цифр. Необходимо перевурнуть массив не используя стандартную функцию для переворота.
let array2 = array0.slice();
let array2plus = [];
for (let n = array2.length - 1; n >= 0; n--) {
    array2plus.push(array2[n])
}
console.log('forward');
console.log(array2);
console.log('backword');
console.log(array2plus);
console.log();

// 4. Есть массив состоящий из N цифр. Необходимо удалить их массива все значения, которые делятся без остатка на 5
let array3 = array0.slice();
for (let i = 0; i < array3.length; i++) {
    if (!(array3[i] % 5)) {
        delete(array3[i]);

    }

}
console.log('all % 5 values deleted');
console.log(array3);

// 5. Есть массив состоящий из N цифр. Необходимо сгенерировать новый массив по правилу, что все положительные числа делятся на 1.5, а отрицательные умножаются на -1.9

let array4 = array0.slice();
let array4plus = [];
for (let i = 0; i < array4.length; i++) {
    if (!(array4[i] % 2) && (array4[i] < 0)) {
        array4plus.push(array4[i] / 1.5 * -1.9)
    } else if (!(array4[i] % 2)) {
        array4plus.push(array4[i] / 1.5)
    } else if (array4[i] < 0) {
        array4plus.push(array4[i] * (-1.9))
    } else {
        array4plus.push(array4[i])
    }

}

console.log();
console.log(array0);
console.log(array4plus);