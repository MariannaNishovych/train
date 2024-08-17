// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-рол');

// const index =styles.indexOf('Блюз');


// if (index !== -1) {
// styles[index] = 'Класика';
// }

// console.log(styles.shift());

// console.log(styles);

// styles.unshift('Реп', 'Реггі');
// console.log(styles.unshift('Реп', 'Реггі'));

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

// const type = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//     for (let i = 0; i > array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(type);


//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...args) {
    let total = 0;

    for (const arg of args) {
        if (typeof arg === 'number')
        total += arg
    }
    return total / args.length;

}

console.log(caclculateAverage(5, 10, 15, 'Hello'));