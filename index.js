const button = document.getElementById('button');
const background = document.getElementById('container');

button.addEventListener('click', () => {
  // Change the button activate or deactivate
  button.classList.toggle('active');
  button.classList.toggle('deactive');

  // Change the background acord to the button
  background.classList.toggle('light');
  background.classList.toggle('dark');

  // Determine the text to show on the button
  if (button.classList.contains('active')) {
    button.innerHTML = 'Click me again';
  } else {
    button.innerHTML = 'Click me';
  }
});
