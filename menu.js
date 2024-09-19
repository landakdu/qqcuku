document.title = (location.pathname.substring(location.pathname.lastIndexOf("/") + 1)).replace('.html','');

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
