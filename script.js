document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelector('.btn-projetos').addEventListener('click', function () {
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        document.querySelector('.nav-links a[href="#projects"]').classList.add('active');
    });

    document.querySelector('.btn-contato').addEventListener('click', function () {
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        document.querySelector('.nav-links a[href="#contact"]').classList.add('active');
    });

    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade();

    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    var parte1 = 'gustavocldeveloper';
    var parte2 = '@gmail.com';
    var email = parte1 + parte2;
    var span = document.getElementById('email-obfuscado');
    if (span) {
        span.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
    }
});

function validarFormulario(event) {
    const form = document.getElementById('contactForm');
    const honeypot = form.querySelector('[name="_honey"]');
    const nome = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const assunto = form.querySelector('[name="subject"]');
    const mensagem = form.querySelector('[name="message"]');

    // Honeypot: se preenchido, bloqueia envio
    if (honeypot && honeypot.value) {
        alert('Erro: Detecção de bot!');
        event.preventDefault();
        return false;
    }

    if (!nome.value.trim() || !email.value.trim() || !assunto.value.trim() || !mensagem.value.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault();
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault();
        return false;
    }

    return true;
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', validarFormulario);
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                this.reset();
            } else {
                alert('Erro ao enviar. Tente novamente.');
            }
        })
        .catch(error => {
            alert('Erro: ' + error.message);
        })
        .finally(() => {
            button.textContent = originalText;
            button.disabled = false;
        });
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                // Altura do header fixo
                const header = document.getElementById('header');
                const offset = header ? header.offsetHeight : 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
        // ...existing code for active class...
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
