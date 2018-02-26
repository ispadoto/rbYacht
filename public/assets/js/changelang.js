function changeLanguage(newLang) {
  var lang = newLang;
  var url = 'http://localhost:3000/?lang=' + lang;
  window.location.assign(url)
  console.log(url);
}
