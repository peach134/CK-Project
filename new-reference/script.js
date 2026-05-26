const progressBar = document.querySelector(".progress__bar");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, value))}%`;
}

function updateActiveLink() {
  const active = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 120 && rect.bottom > 120;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", active && link.getAttribute("href") === `#${active.id}`);
  });
}

window.addEventListener(
  "scroll",
  () => {
    updateProgress();
    updateActiveLink();
  },
  { passive: true }
);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

updateProgress();
updateActiveLink();
