let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};


document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector('.multiple-text')) {
    new Typed('.multiple-text', {
      strings: [
        'FrontEnd Developer.',
        'BackEnd Developer.',
        'Blockchain Developer.',
        'MernStack Developer.'
      ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });
  }
});