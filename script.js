// Анимация появления секций при скролле
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      el.classList.add("active");
    }
  });
}

// Кнопка "Наверх"
const toTopBtn = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  toTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Переключение темы
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// --- Перевод (РУ / EN)
const translations = {
  ru: {
    title: "Моё Портфолио",
    greeting: "Привет, я начинающий разработчик",
    description: "Создаю сайты и простые игры на Unity, Godot и Python",
    aboutTitle: "Обо мне",
    aboutText: "Я увлекаюсь программированием, изучаю веб-разработку и создаю небольшие игры. Особенно мне нравится видеть, как из простой идеи рождается полноценный продукт — будь то сайт или игра. Я постоянно учусь, пробую новое и стремлюсь развиваться как разработчик.",
    skillsTitle: "Навыки",
    skill1: "HTML & CSS",
    skill2: "JavaScript",
    skill3: "Python",
    skill4: "Godot / Unity",
    contactTitle: "Контакты",
    contactText: "Свяжись со мной:",
    footerText: "© 2025 Твоё Имя"
  },
  en: {
    title: "My Portfolio",
    greeting: "Hi, I'm a beginner developer",
    description: "I build websites and simple games using Unity, Godot and Python",
    aboutTitle: "About Me",
    aboutText: "I'm passionate about programming, learning web development, and creating small games. I love turning ideas into real projects, whether it's a website or a game. I'm constantly learning, experimenting and growing as a developer.",
    skillsTitle: "Skills",
    skill1: "HTML & CSS",
    skill2: "JavaScript",
    skill3: "Python",
    skill4: "Godot / Unity",
    contactTitle: "Contact",
    contactText: "Get in touch:",
    footerText: "© 2025 Your Name"
  }
};

const langSelect = document.getElementById("languageSelect");

langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Также обновим <title> в <head>
  document.title = translations[lang].title;
});
