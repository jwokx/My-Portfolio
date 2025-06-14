document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // only animate once
        }
      });
    }, { threshold: 0.1 });

document.querySelectorAll(".fade-in-on-scroll").forEach(el => observer.observe(el));
  });
