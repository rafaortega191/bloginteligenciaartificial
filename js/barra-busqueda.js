const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = input.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  let found = false;

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      window.location.href = card.querySelector('a').href;
      found = true;
    }
  });

  if (!found) {
    window.location.href = '../pages/error404.html';
  }
});
