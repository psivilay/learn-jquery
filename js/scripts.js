$(document).ready(function() {
  var elements = ["h1", "p", "img"]

  elements.forEach(function(element) {
    $(element).click(function() {
      if (element === "h1") {
        alert("This is a header bro!")
      } else if (element === "p") {
        alert("This is a paragraph dude!")
      } else if (element === "img") {
        alert("This is an image man!")
      } else {
        alert("Uhh I don't know what that is!")
      }
    });
  });

});
