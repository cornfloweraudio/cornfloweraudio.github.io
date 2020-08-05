let isOnBlackBox = false;


function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return box.top;
}

window.addEventListener('scroll', function() {
  if(getCoords(document.getElementById("blackBlock")) <= 0) {
  	if(isOnBlackBox == false) {
  		document.getElementById("header").style.backgroundColor = "#2E2E2E";
  		isOnBlackBox = true;
  	}
  }
  else{
    if(isOnBlackBox == true) {
      document.getElementById("header").style.backgroundColor = "black";
      isOnBlackBox = false;
    }
  }
});