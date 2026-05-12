const element = document.getElementById("timer");

let currentDate = new Date();

setInterval(() => {
	currentDate = new Date();
	element.textContent = currentDate.toLocaleString();
},1000)
