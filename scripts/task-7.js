// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// function isLoginValid(login) {
//     let loginLength = login.length;
//     return loginLength >= 4 && loginLength <= 16;
// }

// function isLoginUnique(allLogins, login) {
//     return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//     if (!isLoginValid(login)) {
//         console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//         return "Ошибка! Логин должен быть от 4 до 16 символов";
//     } else if (!isLoginUnique(allLogins, login)) {
//         console.log("Такой логин уже используется!");
//         return "Такой логин уже используется!";
//     } else {
//         logins.push(login);
//         console.log("Логин успешно добавлен!");
//         return "Логин успешно добавлен!";
//     }
// }

// // Вызовы функции для проверки
// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
// addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'