function readMore() {
  var about__dots = document.getElementById('about__dots');
  var about__btn = document.getElementById('about__btn');
  var about__more = document.getElementById('about__more');

  if (about__dots.style.display === 'none') {
    about__dots.style.display = 'inline';
    about__btn.innerHTML = 'Open';
    about__more.style.display = 'none';
  } else {
    about__dots.style.display = 'none';
    about__btn.style.display = 'none';
    about__more.style.display = 'inline';
  }
}
