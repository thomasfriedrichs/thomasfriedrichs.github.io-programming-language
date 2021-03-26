$(document).ready(function () {
  $("form#language").submit(function(event) {
    const game = parseInt($("select#game").val());
    const country = parseInt($("select#country").val());
    const os = parseInt($("select#os").val());
    const music = parseInt($("select#music").val());
    const food = parseInt($("select#food").val());
    event.preventDefault();
  })
});