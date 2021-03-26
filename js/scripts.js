$(document).ready(function () {
  $("form#language").submit(function(event) {
    const game = parseInt($("select#game").val());
    const country = parseInt($("select#country").val());
    const os = parseInt($("select#os").val());
    const music = parseInt($("select#music").val());
    const food = parseInt($("select#food").val());
    let result = (game + country + os + music + food);
    if (result >= 5 && result <= 8) {
      $("#result").text("C#");
    } else if (result >= 9 && result <= 12) {
      $("#result").text("Python"); 
    } else {
      $("#result").text("javascript");
    }
    event.preventDefault();
  })
});