document.addEventListener("DOMContentLoaded", function() {
    gsap.from("#portfolio-title", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Animation de l'image
    gsap.from(".image-moi", {
      duration: 1.2,
      x: -100,         // glisse depuis la gauche
      opacity: 0,
      ease: "power3.out"
    });
  
    // Animation du texte
    gsap.from(".description-moi", {
      duration: 1.2,
      x: 100,          // glisse depuis la droite
      opacity: 0,
      ease: "power3.out",
      delay: 0.3       // démarre un peu après l'image
    });
  });
  