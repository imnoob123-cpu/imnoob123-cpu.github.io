document.querySelectorAll("[data-rainbow]").forEach((node, i) => {
  node.style.animationDelay = `${i * -0.47}s`;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
