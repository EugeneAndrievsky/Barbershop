var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login"); //Не работает в IE

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");


// Окрытие формы логина - клик по кнопке "Вход"
link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

// Открытие карты - клик по кнопе "Как проехать"
mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
});

// Отправка формы
form.addEventListener("submit", function (event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

// Клик по крестику
close.addEventListener("click", function (event) {
  event.preventDefault;
  popup.classList.remove("modal-content-show", "modal-error");
  overlay.classList.remove("modal-overlay-show");
});
mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});

// Закрытие при клике на оверлей
overlay.addEventListener("click", function () {
  if (!popup.classList.contains("modal-content-show")) {
    overlay.classList.remove("modal-overlay-show");
  }
  mapPopup.classList.remove("modal-content-show");
});

// Закрытие модальных окон при нажатии на клавишу "Escape"
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show", "modal-error");
    }
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
    overlay.classList.remove("modal-overlay-show");
  }
});