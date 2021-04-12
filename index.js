const button = document.getElementById('button');
const background = document.getElementById('container');
const footer = document.getElementById('footer');
const text = document.getElementById('txt-theme');

let theme;

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') == 'dark') {
    changeTheme();
  }
});

button.addEventListener('click', changeTheme);

function changeTheme() {
  // Change the button activate or deactivate
  button.classList.toggle('active');
  button.classList.toggle('deactive');

  // Change the background acord to the button
  background.classList.toggle('light');
  background.classList.toggle('dark');
  footer.classList.toggle('dark');

  // Determine the text to show on the button
  if (button.classList.contains('active')) {
    theme = 'dark';
    localStorage.setItem('theme', theme);
    button.innerHTML = 'Click me again';
    text.innerHTML = 'Dark';
  } else {
    theme = 'light';
    localStorage.setItem('theme', theme);
    button.innerHTML = 'Click me';
    text.innerHTML = 'Light';
  }
}
