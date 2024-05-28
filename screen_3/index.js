const arrowUp = document.querySelector(".arrows__up__askR");
const arrowDown = document.querySelector(".arrows__down__askR");
const inp = document.querySelector(".upload__inp__askR");
const photoInp = document.getElementById("photo_input");
function qrCodeIncrease() {
	inp.value = parseInt(inp.value) + 1;
}
function qrCodeDecrease() {
	if (inp.value > 0) {
		inp.value = parseInt(inp.value) - 1;
	} else {
		inp.value = 0;
	}
}
function readFile(input) {
	let file = input.files[0];
	let reader = new FileReader();
	reader.readAsText(file);
	reader.onload = function () {
		document.querySelector(".photo_input-text__askR").textContent = file.name;
	};
	reader.onerror = function () {
		console.log(reader.error);
	};
	document.querySelector(".upload__input__askR").style.background = "#FFFFFF";
	document.querySelector(".after__upload__askR").style.display = "block";
	document.querySelector(".input_svg__askR").style.display = "none";
}
arrowUp.addEventListener("click", qrCodeIncrease);
arrowDown.addEventListener("click", qrCodeDecrease);
photoInp.addEventListener("change", e => readFile(e.target));
