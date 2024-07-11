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
    if (!Number.isNaN(parseInt(string[i], 10))) {
      integer += string[i];
    }
  }
  return integer.length === 0 ? NaN : +integer;
}

// Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

// Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна. Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

// Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.
// '8:00' - начало рабочего дня
// '17:30' - конец рабочего дня
// '14:00' - начало встречи
// 90 - продолжительность встречи в минутах

const isTimeOk = (startDay, endDay, meetDay, during) => {
  const startDayMinute = +startDay.split(':')[0] * 60 + +startDay.split(':')[1];
  const endDayMinute = +endDay.split(':')[0] * 60 + +endDay.split(':')[1];
  const meetStartMinute = +meetDay.split(':')[0] * 60 + +meetDay.split(':')[1];
  const meetEndMinute = meetStartMinute + during;
  return startDayMinute <= meetStartMinute && meetEndMinute <= endDayMinute;
};

checkStringLength();
isStringPalindrome1();
isStringPalindrome2();
findNumbers();
findNumbers2();
isTimeOk('08:00', '17:30', '14:00', 90); // true
isTimeOk('8:0', '10:0', '8:0', 120); // true
isTimeOk('08:00', '14:30', '14:00', 90); // false
isTimeOk('14:00', '17:30', '08:0', 90); // false
isTimeOk('8:00', '17:30', '08:00', 900); // false
