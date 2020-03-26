$(document).ready(function() {
  console.log()
  var age = parseInt(prompt("How old are you?"));

  if (age >=18) {
    $('#ofage').show();
  } else {
    $('#underage').show();
  }
});