// for info/contact change
var home = document.getElementById("mainInfo");
var contact = document.getElementById("contactInfo");
var hBtn = document.getElementById("homeBtn");
var cBtn = document.getElementById("contactBtn");
// for popups
var backEnd = document.getElementsByClassName("back");
var frontEnd1 = document.getElementById("linkPop");
var frontEnd2 = document.getElementById("otherPop");
// for validation
var clearance = document.getElementById("contactInfo");

var infoStatus = 1;

function infoSwitch1(){
	if(infoStatus != 1) {
		home.style.display = "block";
		contact.style.display = "none";
		infoStatus = 1;
	}
}

function infoSwitch2(){
	if(infoStatus != 2) {
		home.style.display = "none";
		contact.style.display = "block";
		infoStatus = 2;
	}
}

function popLink() {
	frontEnd1.style.display = "block";
	for(i=0 ; i < backEnd.length ; i++) {
		backEnd[i].style.background = "linear-gradient(to top left, rgb(1, 44, 52), rgb(0, 0, 0))";
	}
}

function popOther() {
	frontEnd2.style.display = "block";
	for(i=0 ; i < backEnd.length ; i++) {
		backEnd[i].style.background = "linear-gradient(to top left, rgb(1, 44, 52), rgb(0, 0, 0))";
	}
}

function closePop() {
	frontEnd1.style.display = "none";
	frontEnd2.style.display = "none";
	for(i=0 ; i < backEnd.length ; i++) {
		backEnd[i].style.background = "linear-gradient(to top left, rgb(90, 180, 150), rgb(90, 150, 180))";
	}
}

function validate(form) {


	var nameValid = form.name.value;
	if(nameValid == "") {
		alert("Fill Out Your Name and/or Company Name");
		form.name.focus();
		return false;
	}

	var msgValid = form.message.value.length;
	if (msgValid < 5) {
		alert("State your business please");
		form.message.focus();
		return false;
	}

	return true;
}