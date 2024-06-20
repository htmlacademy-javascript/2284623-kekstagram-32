/*
Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:
 */
function checkStringLength (string, length) {
  return string.length <= length;
}

/*
Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
*/
function isStringPalindrome1 (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[(string.length - 1) - i]) {
      return 'Строка не является палиндромом';
    }
  }
  return 'Палиндром';
}

function isStringPalindrome2 (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === string.split('').reverse().join('');
}

/*
Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:
*/
function findNumbers (string) {
  string = string.toString();
  string = string.replaceAll(' ', '').split('');
  const integer = [];
  for (let i = 0; i <= string.length; i++) {
    if (Number.isInteger(+string[i])) {
      integer.push(string[i]);
    }
  }
  return integer.length === 0 ? NaN : +integer.join('');
}

function findNumbers2 (string) {
  string = string.toString();
  let integer = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i]))) {
      integer += string[i];
    }
  }
  return integer.length === 0 ? NaN : +integer;
}
console.log(findNumbers2('1 кефир, 0.5 батона'));
