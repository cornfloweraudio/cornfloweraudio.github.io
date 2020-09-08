let isOnBlackBox = false;
let isOnSmorodinaText = false;
let language = "Bel";
let languageSelectorVisible = true;
let loaded = false;


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
  if(getCoords(document.getElementById("infoDiv")) >= (document.getElementById("header").offsetHeight - document.getElementById("infoDiv").offsetHeight + document.documentElement.clientHeight*1/3) && getCoords(document.getElementById("infoDiv")) < document.documentElement.clientHeight*2/3) {
    if(isOnSmorodinaText == false) {
      document.getElementById("infoDiv").style.opacity = "1.0";
      isOnSmorodinaText = true;
    }
  }
  else{
    if(isOnSmorodinaText == true) {
      document.getElementById("infoDiv").style.opacity = "0.0";
      isOnSmorodinaText = false;
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

function getParam(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

hide_unhide_languageBox();
let languageParam = getParam('lang');
if(languageParam == undefined) {
  setLanguage(localStorage.getItem('pageLanguage'));
} else {
  setLanguage(languageParam);
}

window.onload = function () {
  document.getElementById("preloaderDiv").style.opacity = 0.0;
    window.setTimeout(function () {
      document.getElementById("preloaderDiv").style.display = "none";

    }, 2000);
}

    