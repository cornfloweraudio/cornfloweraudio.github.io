let isOnBlackBox = false;
let language = "Bel";
let languageSelectorVisible = true;


function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return box.top;
}

window.addEventListener('scroll', function() {
  if(getCoords(document.getElementById("blackBlock")) <= document.getElementById("header").offsetHeight && getCoords(document.getElementById("blackBlock")) > -document.getElementById("blackBlock").offsetHeight) {
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

function hide_unhide_languageBox () {
  if(languageSelectorVisible) {
    document.getElementById("languageSelectionBox").style.display = "none";
    languageSelectorVisible = false;
  }
  else {
    document.getElementById("languageSelectionBox").style.display = "block";
    languageSelectorVisible = true;
  }
}

document.getElementById("languageSelectButton").onclick = function(event) {
  hide_unhide_languageBox();
}

document.getElementById("langBEL").onclick = function(event) {
  setLanguage("BEL");
  hide_unhide_languageBox();
}
document.getElementById("langRUS").onclick = function(event) {
  setLanguage("RUS");
  hide_unhide_languageBox();
}
document.getElementById("langENG").onclick = function(event) {
  setLanguage("ENG");
  hide_unhide_languageBox();
}

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    if(languageSelectorVisible) {
    var div = $("#languageSelectionBox"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      var div = $("#languageSelectButton"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) {
      hide_unhide_languageBox(); // скрываем его
  }
    }
  }
  });
});

function setLanguage(lang) {
  if(lang) {
    language = lang;
    if(language == "RUS") {
      Array.prototype.slice.call(document.querySelectorAll(".RUS")).forEach(element => element.style.display = "block");
      Array.prototype.slice.call(document.querySelectorAll(".BEL")).forEach(element => element.style.display = "none");
      Array.prototype.slice.call(document.querySelectorAll(".ENG")).forEach(element => element.style.display = "none");
    }
    if(language == "BEL") {
      Array.prototype.slice.call(document.querySelectorAll(".BEL")).forEach(element => element.style.display = "block");
      Array.prototype.slice.call(document.querySelectorAll(".RUS")).forEach(element => element.style.display = "none");
      Array.prototype.slice.call(document.querySelectorAll(".ENG")).forEach(element => element.style.display = "none");
    }
    if(language == "ENG") {
      Array.prototype.slice.call(document.querySelectorAll(".ENG")).forEach(element => element.style.display = "block");
      Array.prototype.slice.call(document.querySelectorAll(".RUS")).forEach(element => element.style.display = "none");
      Array.prototype.slice.call(document.querySelectorAll(".BEL")).forEach(element => element.style.display = "none");
    }
  }
  else {
    setLanguage("BEL");
  }
  localStorage.setItem('pageLanguage' , language);
}

hide_unhide_languageBox();
setLanguage(localStorage.getItem('pageLanguage'));