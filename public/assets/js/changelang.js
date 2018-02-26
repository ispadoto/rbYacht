function changeLanguage(newLang) {
  var lang = newLang;
  var url = 'https://cryptic-waters-21691.herokuapp.com/?lang=' + lang;
  window.location.assign(url)
  console.log(url);
}
