'use strict';



// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

// const refs = {
//     taskTitle: document.querySelector('.taskTitle'),
//     alertButton: document.querySelector('#alertButton'),
//     alertInput: document.querySelector('#alertInput'),
// }

// refs.alertButton.addEventListener('click', onAlertButtonClick);

// function onAlertButtonClick (){
    

//     refs.taskTitle.textContent = refs.alertInput.value.trim();
// }

// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const refs = {
//     swapButton: document.querySelector('#swapButton'),
//     leftSwapInput: document.querySelector('#leftSwapInput'),
//     rightSwapInput: document.querySelector('#rightSwapInput'),
// };

// refs.swapButton.addEventListener('clic', onSwapButtonClick);

// function onSwapButtonClick() {
//     const leftSwapInputValue = refs.leftSwapInput.value.trim();
//     refs.leftSwapInput.value = refs.rightSwapInput.value.trim();
//     refs.rightSwapInput.value = leftSwapInputValue;
//         }

// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.



// const refs = {
//     taskTitle: document.querySelector(".taskTitle"),
//     passwordButton: document.querySelector("#passwordButton"),
// };

// refs.passwordButton.addEventListener('click', onPasswordButtonClick);

// function onPasswordButtonClick() {

//     if (refs.passwordButton.textContent = "Розкрити") {
//         refs.passwordButton.textContent = "Приховати";
//         refs.taskTitle.style.display = block;
//         return;
//     }

//     refs.taskTitle.style.display = 'none';
//     refs.passwordButton.textContent = "Розкрити";
// }

// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

const refs = {
    statList: document.querySelector('.statList')
};

refs.statList.addEventListener('click', onStatListBtnClick);

let sum = 0;
let statsClicks = {};


function onStatListBtnClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    
    sum += Number(evt.target.dataset.number);
    
    statsClicks[evt.target.textContent] = (statsClicks[evt.target.textContent] ?? 0) + 1;
    console.log(statsClicks)
}
