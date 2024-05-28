const folder_1 = document.querySelector(".blocks_1__askR");
const folderWidth = 260;
const folderHeight = 218;
const folderToOutline = document.querySelector(".block_1__askR");
const folder_2 = document.querySelector(".blocks_2__askR");
const folder_3 = document.querySelector(".blocks_3__askR");
const photo = document.querySelector("#card");
const verticalOrientationDrop = 819;
function allowDrop(event) {
	event.preventDefault();
}

function drag(e) {
	e.dataTransfer.setData("id", e.target.id);
}
function folder_1_Outline() {
	folder_1.firstElementChild.style.border = "2px solid #32a071";
	folder_1.firstElementChild.classList.add("_active__askR");
	folder_2.firstElementChild.classList.remove("_active__askR");
	folder_2.firstElementChild.removeAttribute("style");
	folder_2.firstElementChild.style.border = "1px solid #cecece;";
	folder_3.firstElementChild.classList.remove("_active__askR");
	folder_3.firstElementChild.removeAttribute("style");
	folder_3.firstElementChild.style.border = "1px solid #cecece;";
}
function folder_2_Outline() {
	folder_2.firstElementChild.style.border = "2px solid #32a071";
	folder_2.firstElementChild.classList.add("_active__askR");
	folder_1.firstElementChild.classList.remove("_active__askR");
	folder_1.firstElementChild.removeAttribute("style");
	folder_1.firstElementChild.style.border = "1px solid #cecece;";
	folder_3.firstElementChild.classList.remove("_active__askR");
	folder_3.firstElementChild.removeAttribute("style");
	folder_3.firstElementChild.style.border = "1px solid #cecece;";
}
function folder_3_Outline() {
	folder_3.firstElementChild.style.border = "2px solid #32a071";
	folder_3.firstElementChild.classList.add("_active__askR");
	folder_1.firstElementChild.classList.remove("_active__askR");
	folder_1.firstElementChild.removeAttribute("style");
	folder_1.firstElementChild.style.border = "1px solid #cecece;";
	folder_2.firstElementChild.classList.remove("_active__askR");
	folder_2.firstElementChild.removeAttribute("style");
	folder_2.firstElementChild.style.border = "1px solid #cecece;";
}

function drop(e) {
	let itemId = e.dataTransfer.getData("id");
	console.log(itemId);
	const coordsFolder_1 = folder_1.getBoundingClientRect();
	const coordsFolder_2 = folder_2.getBoundingClientRect();
	const coordsFolder_3 = folder_3.getBoundingClientRect();
	if (window.innerWidth <= 819) {
		console.log("should work");
		if (
			(e.clientY > coordsFolder_1.top) &
			(e.clientY <= coordsFolder_1.top + folderHeight)
		) {
			folder_1_Outline();
		} else if (
			(e.clientY > coordsFolder_2.top) &
			(e.clientY < coordsFolder_2.top + folderHeight)
		) {
			folder_2_Outline();
		} else if (
			(e.clientY >= coordsFolder_3.top) &
			(e.clientY < coordsFolder_3.top + folderHeight)
		) {
			folder_3_Outline();
		}
	} else {
		if (e.clientX <= coordsFolder_1.left + folderWidth) {
			folder_1_Outline();
		} else if (
			(e.clientX <= coordsFolder_2.left + folderWidth) &
			(e.clientX > coordsFolder_1.left + folderWidth) &
			(e.clientX < coordsFolder_3.left + folderWidth)
		) {
			folder_2_Outline();
		} else if (
			(e.clientX > coordsFolder_1.left + folderWidth) &
			(e.clientX > coordsFolder_2.left + folderWidth) &
			(e.clientX <= coordsFolder_3.left + folderWidth)
		) {
			folder_3_Outline();
		}
	}
}

folder_1.addEventListener("dragover", allowDrop);
folder_2.addEventListener("dragover", allowDrop);
folder_3.addEventListener("dragover", allowDrop);
folder_1.addEventListener("drop", drop);
folder_2.addEventListener("drop", drop);
folder_3.addEventListener("drop", drop);
photo.addEventListener("dragstart", drag);
