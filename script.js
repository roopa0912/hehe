document.addEventListener("DOMContentLoaded", () => {
  const desk = document.getElementById("desk");
  const sky = document.getElementById("sky");

  function flip() {
    desk.classList.toggle("open");
    rain(25);
  }

  ["flip1", "flip2", "flipHidden"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => {
      e.stopPropagation();
      flip();
    });
  });
  desk.addEventListener("dblclick", flip);

  const heartSrc = "assets/black_heart.png";
  function drop(x) {
    const h = document.createElement("img");
    h.src = heartSrc;
    h.className = "heart";
    h.style.left = (x ?? Math.random() * window.innerWidth) + "px";
    h.style.bottom = "-40px";
    h.style.animationDuration = 3000 + Math.random() * 2000 + "ms";
    h.style.width = 18 + Math.random() * 22 + "px";
    sky.appendChild(h);
    setTimeout(() => h.remove(), 4800);
  }
  function rain(n = 18) {
    for (let i = 0; i < n; i++) {
      setTimeout(() => drop(), i * 100);
    }
  }

  // gentle rain on load
  setTimeout(() => rain(12), 800);
});
