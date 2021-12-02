const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.navlink')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
    console.log('click')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})