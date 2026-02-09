const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';
  heart.textContent = '❤️';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

// Start hearts animation (only after win)
function startHearts() {
  setInterval(createHeart, 200); // create a new heart every 200ms
}