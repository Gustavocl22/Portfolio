# 🚀 Portfólio - Desenvolvedor Full Stack

Este é um portfólio pessoal desenvolvido em HTML, CSS e JavaScript, com foco em apresentar projetos, habilidades e formas de contato de maneira moderna, responsiva e segura.

## 🗂️ Estrutura do Projeto

- `index.html`: Página principal do portfólio.
- `style.css`: Estilos personalizados para layout, responsividade e animações.
- `script.js`: Funcionalidades de navegação, animação, validação de formulário e proteção anti-bot.
- `Image/Perfil.jpg`: Imagem pessoal (adicionada localmente, ignorada pelo repositório).
- Outras imagens de projetos: Devem ser otimizadas e recortadas para boa visualização.

## ✨ Funcionalidades

- **Navbar responsiva**: Menu hamburger para mobile, destaque automático da seção ativa.
- **Seção de Habilidades**: Ícones Devicon coloridos, descrições acessíveis.
- **Projetos**: Cards com imagem, tecnologias usadas e links para demo/código.
- **Formulário de Contato**:
  - Envio via FormSubmit.
  - Honeypot anti-bot (campo oculto `_honey`).
  - Validação de campos obrigatórios e e-mail.
  - Feedback visual de envio.
- **Proteção de Dados**:
  - E-mail e telefone protegidos contra coleta de bots.
  - Imagem pessoal ignorada no repositório (`.gitignore`).

## 🖼️ Dicas para imagens de projetos
- Use imagens com resolução igual ou maior que o tamanho exibido.
- Recorte para mostrar apenas a área principal do projeto.
- Prefira PNG ou JPEG de alta qualidade.

## 🔒 Segurança
- O formulário possui honeypot e validação para evitar spam.
- Dados sensíveis (imagem pessoal) não são enviados ao repositório.

## 🎨 Personalização
- Edite as seções de habilidades, projetos e contato conforme sua necessidade.
- Para trocar ícones, utilize a biblioteca [Devicon](https://devicon.dev/).

## 🚀 Deploy
- Pode ser hospedado no Vercel, Netlify, GitHub Pages, etc.
- Lembre-se de configurar variáveis de ambiente e proteger dados sensíveis se necessário.

## 🛡️ Boas práticas de segurança para dados pessoais

- Nunca exponha seu e-mail em texto puro no HTML.
- Prefira exibir o e-mail como imagem ou obfuscado via JavaScript.
- Use honeypot no formulário para evitar spam de bots.
- Valide todos os campos do formulário no JavaScript.
- Não exponha dados sensíveis (e-mail, telefone, imagem pessoal) em README público ou código aberto.
- Adicione sua imagem pessoal em uma pasta ignorada pelo `.gitignore`.
- Se possível, utilize captcha (ex: Google reCAPTCHA) para reforçar a proteção do formulário.
- Mantenha bibliotecas externas sempre atualizadas.

Essas práticas ajudam a proteger seus dados e evitar coleta automática por bots.

---

Dúvidas ou sugestões? Fique à vontade para abrir uma issue ou entrar em contato pelo formulário do site!
