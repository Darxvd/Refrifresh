window.onscroll = function() {
  if (document.documentElement.scrollTop > 300) {
    document.querySelector(".go-top-container").classList.add('show')
  } else {
    document.querySelector(".go-top-container").classList.remove('show')
  }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuIcon');
  const elementos = document.querySelector('.list');

  menuIcon.addEventListener('click', function() {
    elementos.classList.toggle('open');
  });
});
