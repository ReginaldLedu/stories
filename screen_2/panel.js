const actionBox = document.querySelector(".panel__actions__askR");
const actions = actionBox.children;
const folderTitleInput = document.querySelector(".panel__title__askR");
const editIcon = document.querySelector(".title__edit__askR");
const cards__box = document.querySelector(".panel__cards__askR");
const cards = cards__box.children;
const labels = document.querySelectorAll(".card__label__askR");
const inputs = document.querySelectorAll(".card__input__askR");
const chooseAllPhotos = document.querySelector(".choose__all__askR");
const deleteAction = document.querySelector(".action__delete__askR");
const printAction = document.querySelector(".action__print__askR");
const downloadAction = document.querySelector(".action__download__askR");
const startAction = document.querySelector(".action__start__askR");
const titleSaveBtn = document.querySelector(".title__save__askR");
const inputsArr = Array.from(inputs);

function cardOutlineToggle() {
	if (document.querySelector(".text__askR").textContent === "Снять выделение") {
		inputsArr.forEach(item => (item.checked = false));
		document.querySelector(".text__askR").textContent = "Выделить все";
		deactivatePanelActions();
	} else if (
		document.querySelector(".text__askR").textContent === "Выделить все"
	) {
		inputsArr.forEach(item => (item.checked = true));
		document.querySelector(".text__askR").textContent = "Снять выделение";
		activatePanelActions();
	}
}
function activateOnCLick(e) {
	const checked = inputsArr.filter(item => item.checked === true);
	console.log(e.target);
	console.log(e.target.checked);
	if (e.target.checked === true || checked[0] !== undefined) {
		activatePanelActions();
	} else if (e.target.checked === false || checked === undefined) {
		deactivatePanelActions();
	} else {
		return;
	}
}
function deactivatePanelActions() {
	startAction.querySelector(".start_svg__askR").removeAttribute("fill");
	startAction.querySelector(".start_svg__askR").setAttribute("fill", "#6f6f6f");
	downloadAction.querySelector(".download_svg__askR").removeAttribute("fill");
	downloadAction
		.querySelector(".download_svg__askR")
		.setAttribute("fill", "#6f6f6f");
	downloadAction.querySelector(".action__text__askR").style.color = "#6f6f6f";
	printAction.querySelector(".print_svg__askR").removeAttribute("fill");
	printAction.querySelector(".print_svg__askR").setAttribute("fill", "#6f6f6f");
	printAction.querySelector(".action__text__askR").style.color = "#6f6f6f";
	deleteAction.querySelector(".delete_svg__askR").removeAttribute("fill");
	deleteAction
		.querySelector(".delete_svg__askR")
		.setAttribute("fill", "#6f6f6f");
	deleteAction.querySelector(".action__text__askR").style.color = "#6f6f6f";
}
function activatePanelActions() {
	//document.querySelector(".text").textContent = "Снять выделение";
	startAction.querySelector(".start_svg__askR").removeAttribute("fill");
	startAction.querySelector(".start_svg__askR").setAttribute("fill", "#32A071");
	startAction.querySelector(".action__text__askR").style.color = "#262626";
	downloadAction.querySelector(".download_svg__askR").removeAttribute("fill");
	downloadAction
		.querySelector(".download_svg__askR")
		.setAttribute("fill", "#262626");
	downloadAction.querySelector(".action__text__askR").style.color = "#262626";
	printAction.querySelector(".print_svg__askR").removeAttribute("fill");
	printAction.querySelector(".print_svg__askR").setAttribute("fill", "#262626");
	printAction.querySelector(".action__text__askR").style.color = "#262626";
	deleteAction.querySelector(".delete_svg__askR").removeAttribute("fill");
	deleteAction
		.querySelector(".delete_svg__askR")
		.setAttribute("fill", "#FF3A44");
	deleteAction.querySelector(".action__text__askR").style.color = "#FF3A44";
}
function allowEdit(e) {
	folderTitleInput.removeAttribute("disabled");
	folderTitleInput.style.color = "#262626";
	folderTitleInput.focus();
	titleSaveBtn.style.display = "block";
	e.target.style.display = "none";
}
function titleSave(e) {
	folderTitleInput.setAttribute("disabled", true);
	e.target.style.display = "none";
	editIcon.style.display = "block";
}

chooseAllPhotos.addEventListener("click", () => cardOutlineToggle(this));
inputsArr.forEach(item => item.addEventListener("change", activateOnCLick));
editIcon.addEventListener("click", allowEdit);
titleSaveBtn.addEventListener("click", titleSave);
