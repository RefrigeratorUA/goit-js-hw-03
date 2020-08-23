function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  return login.length < min || login.length > max ? false : true;
}

function isLoginUnique(allLogins, login) {
  // Write code under this line
  return allLogins.includes(login) ? false : true;
}

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message = SUCCESS;
  // Write code under this line
  if (!isLoginValid(login)) {
    message = ERROR;
  } else if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
  } else {
    allLogins.push(login);
  }

  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
