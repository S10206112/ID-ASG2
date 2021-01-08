$(document).ready(function () {
    fetch('http://newsapi.org/v2/top-headlines?country=sg&apiKey=2358a271cd264c639fc86f2c6967aaf5')
  .then(response => response.json())
  .then(data => console.log(data));
