//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//     const userName = prompt('Enter your name');

//     if (!userName) {
//         alert('Not correct')
//         return;
//     }
//     callback(userName);
// }

// const greet = name => {
//     console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);


//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

const makeProduct = (name, price, callback) => {
    const product = {
        name,
        price,
        id: Math.random()
    }

callback(product);

};

const showProduct = product => { 
    console.log(product);
}

makeProduct('iphone', 1000, showProduct)