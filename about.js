const hambergur = document.querySelector('.hamburger');
const information = document.querySelector('.information');
const close = document.querySelector('.close');
hambergur.addEventListener('click', (events) => {
  events.preventDefault();
  hambergur.classList.toggle('close');
  close.style.display = 'block';
  hambergur.style.display = 'none';
  information.classList.add('active');
});
close.addEventListener('click', (events) => {
  events.preventDefault();
  hambergur.classList.toggle('hambergur');
  hambergur.style.display = 'block';
  close.style.display = 'none';
  information.classList.remove('active');
});
