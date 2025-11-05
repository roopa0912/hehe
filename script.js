document.addEventListener("DOMContentLoaded", () => {
  const desk = document.getElementById("desk");
  const sky = document.getElementById("sky");

  // smoother flip toggle
  function flip() {
    desk.classList.toggle("open");
    rain(26);
  }

  // attach flip events
  ["flip1", "flip2", "flipHidden"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", flip);
  });
  desk.addEventListener("dblclick", flip);

  // make note clicks super reliable
  document.querySelectorAll(".note").forEach(note => {
    note.style.cursor = "pointer"; // visibly clickable
    note.addEventListener("click", e => {
      e.stopPropagation(); // prevents flip triggering accidentally
      note.classList.toggle("open");
    });
  });

  // heart rain effect
  const heartSrc = "assets/black_heart.png";
  function drop(x) {
    const h = document.createElement("img");
    h.src = heartSrc;
    h.className = "heart";
    h.style.left = (x ?? Math.random() * window.innerWidth) + "px";
    h.style.bottom = "-40px";
    h.style.animationDuration = 2600 + Math.random() * 1800 + "ms";
    h.style.width = 16 + Math.random() * 20 + "px";
    sky.appendChild(h);
    setTimeout(() => h.remove(), 4600);
  }
  function rain(n = 18) {
    for (let i = 0; i < n; i++) setTimeout(() => drop(), i * 80);
  }
});
