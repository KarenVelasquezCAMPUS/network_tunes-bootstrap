window.addEventListener('scroll', function() {
    var menu = document.querySelector('.sticky-menu');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 200) {
      menu.classList.add('fixed');
    } else {
      menu.classList.remove('fixed');
    }
  });