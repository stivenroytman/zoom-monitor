function getAttendTime(){
    return Date()
    .split(" ")
    .slice(0,5)
    .join("_")
    .replaceAll(":", "-")
}

function getGuestList(){
  let guestList = document.getElementsByClassName("participants-ul")[0].getElementsByTagName("li");
  let parsedGuests = [];
  for (guest of guestList) {
    parsedGuests.push(guest
		.textContent.replace("(Me)","")
		.replace("(Host)","")
		.replace("(Host, Me)", "")
		.replace(" ", "_"));
  };
  return parsedGuests.join(",")
}

class attendCheck {
  constructor(){
    this.time = getAttendTime();
	this.guests = getGuestList();
  }
}

let clickGuest = () => {
  document.getElementsByClassName("footer-button__button ax-outline")[0].click();
}

let getUpdate = () => {
	let aCheck = new attendCheck();
	let JSONcheck = JSON.stringify(aCheck);
	return JSONcheck;
}

clickGuest()
attUpdate = getUpdate()
clickGuest()
return attUpdate
