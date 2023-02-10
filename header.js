const headerElement = document.querySelector('header');

window.addEventListener('scroll', (e) => {
  if (window.scrollY > window.innerHeight) {
    console.log('changing the styles')
    headerElement.classList.add('header-css');
  } else {
    headerElement.classList.remove('header-css');
  }
})