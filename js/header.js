const pathParts = window.location.pathname.split('/');
let path = "/includes/header.html";

// If on "portfolio" path (on GitHub Pages), make that the base of the path
if(pathParts[0] === "portfolio")
  path += "portfolio";

fetch(path).then(res => res.text()).then(data => {
  document.getElementById('header').innerHTML = data;
});