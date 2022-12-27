// Светофор

let color = prompt("Введите цвет")
console.log(color);
switch (color) {
	case "Red":
		console.log("Переходить дорогу нельзя");
		break;
	case "Yellow":
		console.log("Ждите");
		break;
	case "Green":
		console.log("Переходить дорогу можно");
		break;
	default:
		console.log("Введите цвет светофора");
}