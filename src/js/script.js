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

let expand = false
const materi = ['Relationship (One to One)', 'Relationship (One to Many)', 'Polymorphic Relationship', 'Mutators & Cast']
document.querySelector('.selengkapnya')?.addEventListener('click', (event) => {
  event.preventDefault()
  const list = document.querySelector('.list-materi')
  expand = !expand
  document.querySelector('.selengkapnya i').classList.toggle('expand', expand)
  if (expand) {
    materi.forEach(element => {
      const item = document.createElement('li')
      const icon = document.createElement('i')
      const text = document.createTextNode(element)
      icon.setAttribute('class', 'fa-solid fa-lock mr-3')
      item.setAttribute('class', 'px-6 py-4 border-b first:border-t hover:bg-slate-50 cursor-pointer')
      item.appendChild(icon)
      item.appendChild(text)
      list.appendChild(item)
    })
  } else {
    const oldList = [...list.children]
    oldList.slice(oldList.length - (materi.length), oldList.length).forEach(el => list.removeChild(el))
  }
})