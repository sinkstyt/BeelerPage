$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  })

  $("button#light").click(function() {
    $("body").removeClass();
  })
});