$(document).ready(function () {
  $("form#language").click(function(event) {
    const game = parseInt($("select#game").val());
    const country = parseInt($("select#country").val());
    const os = parseInt($("select#os").val());
    const music = parseInt($("select#music").val());
    const food = parseInt($("select#food").val());
    let value = (game + country + os + music + food);
    if (value >= 5 && value <= 8) {
      $("#result").text("C#");
      $(".result").show();
    } else if (value >= 9 && value <= 12) {
      $("#result").text("Python");
      $(".result").show();
    } else {
      $("#result").text("javascript");
      $(".result").show();
    }
    event.preventDefault();
  });
});