document.addEventListener("DOMContentLoaded", () => {
  const pc = document.getElementById('pc');
  const desk = document.getElementById('desk');
  const sky = document.getElementById('sky');

  function flip() {
    // Toggle the class on the desk (parent)
    desk.classList.toggle('open');
    rain(26);
  }

  // Make sure these elements exist before adding listeners
  const flip1 = document.getElementById('flip1');
  const flip2 = document.getElementById('flip2');
  const flipHidden = document.getElementById('flipHidden');

  if (flip1) flip1.addEventListener('click', flip);
  if (flip2) flip2.addEventListener('click', flip);
  if (flipHidden) flipHidden.addEventListener('click', flip);
  desk.addEventListener('dblclick', flip);

  // Fix: handle all notes using event delegation
  document.body.addEventListener('click', e => {
    const note = e.target.closest('.note');
    if (note) note.classList.toggle('open');
  });

  // gentle heart rain using black heart image
  const heartSrc = "assets/black_heart.png";
  function drop(x) {
    const h = document.createElement('img');
    h.src = heartSrc;
    h.className = 'heart';
    h.style.left = (x ?? Math.random() * window.innerWidth) + 'px';
    h.style.bottom = '-40px';
    h.style.animationDuration = (2600 + Math.random() * 1800) + 'ms';
    h.style.width = (16 + Math.random() * 20) + 'px';
    sky.appendChild(h);
    setTimeout(() => h.remove(), 4600);
  }
  function rain(n = 18) {
    for (let i = 0; i < n; i++) setTimeout(() => drop(), i * 80);
  }
});
