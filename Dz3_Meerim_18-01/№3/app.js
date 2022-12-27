// Numbers

let num1 = parseInt(prompt('Введите число'))
let num2 = parseInt(prompt('Введите число'))

if (isNaN(num1) && isNaN(num2) || isNaN(num1) || isNaN(num2)) {
  console.log('Вы ввели не число');
} else if (num1 === '' && num2 === '' || num1 === '' || num2 === '') {
  console.log('Вы не ввели число');
} else if (num1 < num2) {
  console.log('Второе число больше первого');
} else if (num1 > num2) {
  console.log('Первое число больше второго');
} else {
  console.log('Числа равны');
}