const rainbowNodes = document.querySelectorAll("[data-rainbow]");

rainbowNodes.forEach((node, index) => {
  // Tiny variation so multiple rainbow words don't march in perfect sync.
  node.style.animationDelay = `${index * -0.55}s`;
});

// Scroll-to-top with a little snap if the brand is clicked.
document.querySelector(".brand")?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
