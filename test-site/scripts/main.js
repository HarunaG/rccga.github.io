let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/an1.png') {
	myImage.setAttribute('src', 'images/an2.png');
	} else {
		myImage.setAttribute('src', 'images/an1.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserDetails() {
	let myDetails = prompt('Please enter your details...');
	localStorage.setItem('Details', myDetails);
	myHeading.textContent = 'Here are the details you entered: ' + myDetails;
}
if(!localStorage.getItem('Details')) {
	setUserDetails();
} else {
	let storedDetails = localStorage.getItem('Details');
	myHeading.textContent = 'Here are the details you entered: ' + storedDetails;
}
myButton.onclick = function() {
	setUserDetails();
}

function setUserDetails() {
	let myDetails = prompt('Please enter your details...');
	if(!myDetails) {
		setUserDetails();
	} else {
		localStorage.setItem('Details', myDetails);
	myHeading.textContent = 'Here are the details you entered: ' + myDetails;
}
	}