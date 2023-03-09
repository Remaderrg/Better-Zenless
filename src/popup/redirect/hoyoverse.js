const language = localStorage.getItem('language')
function View() {
// Определяет какой язык использовать на странице путем UseLanguage
    if (language === null) {
    console.log("Нет установленного языка. Берется язык системы");
    const userLang = navigator.language;
    console.log("Язык системы: " + userLang);
    const UseLanguage = userLang;
    console.log("Используемый язык: " + UseLanguage);
    localStorage.setItem('language', UseLanguage)
    location.reload();
    } else if (language === "ru" || language === "ru-RU") {
    location.href = "https://www.hoyoverse.com/ru-ru";
    } else {
    location.href = "https://www.hoyoverse.com/en-us";
    }
}
window.onload = View;
