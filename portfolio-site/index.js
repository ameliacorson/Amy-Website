// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link')
const currentSkillsBtn = document.getElementById('current-skill-btn')
const learningSkillsBtn = document.getElementById('learning-skill-btn')
const currentSkillsContainer = document.getElementById("skill-list")
const learningSkillsContainer = document.getElementById("learning-skills")

// navigation

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })

// skills

function toggleToSkills() {
    currentSkillsBtn.classList.remove("skill-btn-hidden")
    learningSkillsContainer.classList.add("hidden")
    currentSkillsContainer.classList.remove("hidden")
    learningSkillsBtn.classList.add("skill-btn-hidden")

}

function toggleToLearning() {
    currentSkillsContainer.classList.add("hidden")
    learningSkillsBtn.classList.remove("skill-btn-hidden")
    currentSkillsBtn.classList.add("skill-btn-hidden")
    learningSkillsContainer.classList.remove("hidden")
}

currentSkillsBtn.addEventListener('click', toggleToSkills)
learningSkillsBtn.addEventListener('click', toggleToLearning)