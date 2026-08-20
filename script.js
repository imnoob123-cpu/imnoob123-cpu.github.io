// make every rainbow word start at a slightly different point,
// otherwise the whole page looks like one giant marching gradient.
document.querySelectorAll("[data-rainbow]").forEach((node, i) => {
  node.style.animationDelay = `${i * -0.47}s`;
});

// little smooth jumps for the nav
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
