// Efek confetti hati saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
  const confetti = document.createElement("div");
  confetti.innerHTML = "💖 💕 💞 💓";
  confetti.style.position = "fixed";
  confetti.style.top = "10px";
  confetti.style.left = "50%";
  confetti.style.transform = "translateX(-50%)";
  confetti.style.fontSize = "2rem";
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 3000);
});
