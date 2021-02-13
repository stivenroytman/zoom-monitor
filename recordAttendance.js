const oneMinute = 60000;
const halfHour = oneMinute * 30;

let clickMore = () => {
  document.getElementById("moreButton").click();
}

let clickGuest = () => {
  document.getElementsByClassName("footer-button__button ax-outline")[0].click();
}

let getUpdate = () => {
	let guestList = document.getElementsByClassName("participants-ul")[0].getElementsByTagName("li");
	let parsedGuests = [];
	for (guest of guestList) {parsedGuests.push(guest.textContent)};
	let guestCSV = parsedGuests.join(", ");
	let timeNow = Date();
	let updateMessage = timeNow + " : " + guestCSV;
	return updateMessage;
}

let makePost = (rawMessage) => {
  let Http = new XMLHttpRequest();
	const root = "localhost:8080/attend";
	let message = encodeURIComponent(rawMessage);
	let req = `${root}?message=${message}`;
	Http.open("POST", req);
	Http.send();
};

let sendAttendance = () => {
	clickGuest();
	let updateOut = getUpdate();
	makePost(updateOut);
	setTimeout(clickGuest, 5000);
}

setInterval(clickMore, oneMinute);
setInterval(sendUpdate, halfHour);
