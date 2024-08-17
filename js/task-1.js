// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'

//function checkNumber(a) {
   // if (a === 10) {
   //     return 'Вірно';
   // } else {
   //     return 'Невірно';
    //  }

//return  a === 10 ? 'Вірно' : 'Невірно';
//}

//console.log(checkNumber(10));


// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

// function checkSeason(num) {
//     let result = '';
    
//     switch (num) {
//         case 1:
//             result = 'зима';
//             break;
//         case 2:
//             result = 'весна';
//             break;
//         case 3:
//             result = 'літо';
//             break;
//         case 4:
//             result = 'осінь';
//             break;
//         default:
//             result = 'оберіть число від 1 до 4';
//     }
//     return result;
// }

// console.log(checkSeason(10));

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// function formateTime(minutes) {

//     const hours = Math.floor(minutes / 60);
//     const minute = minutes % 60;

//     return `${hours}:${minute}`;
// }

// console.log(formateTime(70));
// console.log(formateTime(100));
// console.log(formateTime(210));