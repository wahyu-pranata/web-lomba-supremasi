const navbar = document.querySelector('.navbar')
const navbarNav = document.querySelector('.navbar-nav')
const navBtn = document.querySelector('.nav-btn')
navBtn.addEventListener('click', () => {
  navbar.classList.toggle('show')
})

document.addEventListener('click', ({target}) => {
  if (target != navbarNav && !navbarNav.contains(target) && target != navBtn && !navBtn.contains(target)) {
    navbar.classList.remove('show')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.querySelector('.navbar').classList.add('shadow-lg')
  } else {
    document.querySelector('.navbar').classList.remove('shadow-lg')
  }
})