var elements = document.querySelectorAll("[data-text]");
console.log(elements);
Array.prototype.forEach.call(elements, function (el) {
  el.innerText = chrome.i18n.getMessage(el.getAttribute("data-i18n"));
});
var elements = document.querySelectorAll("[data-img]");
console.log(elements);
Array.prototype.forEach.call(elements, function (el) {
  el.title = chrome.i18n.getMessage(el.getAttribute("data-i18n"));
});


