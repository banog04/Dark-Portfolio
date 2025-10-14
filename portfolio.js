document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll('.nav, .two, .one, .profile, .profile1, .about, .abouttext, .project-h1, .card1, .card2, .card3, .profile2, .skills-section h2, .skill-item, .content4 h1, .outline-text, .white, .inputs');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, {
        threshold: 0.1
      });

      elements.forEach(el => observer.observe(el));
    });;