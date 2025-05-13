// Set theme before the page loads to prevent flicker
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

async function switchTheme() {
  const currTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}