const h1 = document.querySelector('.parallax-h1');
const about = document.querySelector('.parallax-about-img');

window.onscroll = () => {
  const scrollTop = window.scrollY;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    h1.style.top = (scrollTop * -0.5) + 'px';
  } else {
    h1.style.top = (scrollTop * -0.2) + 'px';
    about.style.top = (scrollTop * -0.2) + 'px';
  }
}
