const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");

function toggleMenu() {
    const isActive = navbar.classList.toggle("active");
    menuIcon.setAttribute("aria-expanded", isActive);
}

menuIcon.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 769) {
            navbar.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", false);
        }
    });
});

function highlightActiveSection() {
    let activeSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            activeSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(activeSection)) {
            link.classList.add("active");
        }
    });
}

function debounce(func, wait = 20) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener("scroll", debounce(highlightActiveSection));

function handleResize() {
    if (window.innerWidth >= 769) {
        navbar.classList.add("desktop");
        navbar.classList.remove("active");
        menuIcon.setAttribute("aria-expanded", false);
    } else {
        navbar.classList.remove("desktop");
    }
}

window.addEventListener("resize", handleResize);

function enviarMensagem(event) {
    event.preventDefault();
    const form = document.getElementById("formContato");
    const statusDiv = document.getElementById("statusMensagem");
    const botao = form.querySelector(".botao");
    const honeypot = document.getElementById("apelido");

    if (honeypot.value) {
        statusDiv.textContent = "Erro: Detecção de bot!";
        statusDiv.classList.add('mostrar');
        return;
    }

    form.submit();

    botao.classList.add('oculto');
    statusDiv.textContent = "Enviando...";
    statusDiv.classList.add('mostrar');

    setTimeout(() => {
        statusDiv.textContent = "✔ Mensagem enviada com sucesso!";
        form.reset();

        setTimeout(() => {
            statusDiv.classList.remove('mostrar');
            botao.classList.remove('oculto');
            statusDiv.textContent = "";
        }, 3000);
    }, 500);
}
