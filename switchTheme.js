let currentTheme = localStorage.getItem('theme');
currentTheme = currentTheme === null ? true : currentTheme === 'true';

function switchTheme(theme) {
  const lightCss = document.getElementById("light-css");
  const darkCss = document.getElementById("dark-css");

  if (theme) {
    darkCss.disabled = false;
    setTimeout(() => {
      lightCss.disabled = true;
    }, 50);
  } else {
    lightCss.disabled = false;
    setTimeout(() => {
      darkCss.disabled = true;
    }, 50);
  }
}

document.getElementById("switchTheme").addEventListener("click", () => {
  toggleTheme();
});

document.addEventListener("DOMContentLoaded", () => {
  switchTheme(currentTheme);
  document.getElementById("switchTheme").checked = !currentTheme; 
});

function toggleTheme() {
  currentTheme = !currentTheme;
  localStorage.setItem('theme', currentTheme);
  switchTheme(currentTheme);
}