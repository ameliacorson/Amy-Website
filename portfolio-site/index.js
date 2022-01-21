const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')
const currentSkillsBtn = document.getElementById('current-skill-btn')
const learningSkillsBtn = document.getElementById('learning-skill-btn')
const currentSkillsContainer = document.getElementById("skill-list")
const learningSkillsContainer = document.getElementById("learning-skills")
const themeToggle = document.getElementById("theme-toggle")
const header = document.getElementById("home")
const aboutSection = document.getElementById("about")
const skillsSection = document.getElementById("skills")
const portfolioSection = document.getElementById("portfolio")
const footer = document.getElementById("footer")

// theme

function toggleTheme () {
    header.classList.toggle("daymode")
    aboutSection.classList.toggle("daymode")
    skillsSection.classList.toggle("daymode")
    portfolioSection.classList.toggle("daymode")
    footer.classList.toggle("daymode")
    themeToggle.classList.toggle("active")
}

themeToggle.addEventListener('click', toggleTheme)

// navigation

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

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

