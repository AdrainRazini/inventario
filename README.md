
# 📦 2025: Inventário

Olá a todos! 👋  
Seja bem-vindo ao repositório do projeto **Sistema de Inventário – Para Empresa**!

---

## 🎯 Objetivo

Este projeto foi desenvolvido com foco na automação da **geração de documentos**, oferecendo:

- Rapidez e interatividade na criação de inventários;
- Um site **interativo** e com visual **profissional**;
- Demonstração da integração entre **tecnologias web modernas**;
- Aprimoramento de habilidades em desenvolvimento **front-end** e **back-end**.

---

## 🛠️ Tecnologias Utilizadas

| Front-End | Back-End |
|-----------|----------|
| ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) |
| ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![JSONBin](https://img.shields.io/badge/JSONBin-2c3e50?style=for-the-badge&logo=json&logoColor=white) |

📦 Bibliotecas adicionais:
- [GSAP](https://greensock.com/gsap/) – Animações fluidas
- [AOS](https://michalsnik.github.io/aos/) – Animações em rolagem
- [Font Awesome](https://fontawesome.com/) – Ícones personalizados
- [Firebase](https://firebase.google.com/) – Autenticação, Firestore e hospedagem opcional
- [JSONBin](https://jsonbin.io/) – Armazenamento remoto rápido de dados em JSON

## 📁 Estrutura do Projeto



```
INVENTARIO/
├── api/                         # Pasta responsável pela lógica da API (backend)
│   └── index.js                # Arquivo principal com rotas e funções da API
├── data/                        # Armazena os dados usados pelo sistema
│   └── inventario.json         # Base de dados local em JSON (poderia ser substituído por SQLite ou outro SQL)
├── node_modules/               # Dependências instaladas via npm (gerenciado automaticamente)
├── pdf/                        # Arquivos PDF utilizados no sistema
│   └── Modelo inventario.pdf   # Modelo de inventário a ser gerado ou usado como referência
├── public/                     # Pasta pública acessada pelo navegador
│   ├── css/                    # Arquivos de estilo (CSS) para o frontend
│   │   ├── adicionar.css       # Estilos específicos da página de adição de itens
│   │   ├── doc.css             # Estilos de documentos ou seções específicas
│   │   ├── style.css           # Estilos gerais do site
│   │   └── test.css            # Estilos para testes ou páginas de protótipo
│   ├── image/                  # Imagens usadas no site
│   │   ├── favicon/            # Favicon e ícones relacionados
│   │   ├── 404.png             # Imagem para página de erro 404
│   │   ├── anonimo.png         # Imagem genérica para usuário anônimo
│   │   └── logo.png            # Logo da empresa ou sistema
│   ├── js/                     # Scripts JavaScript para funcionalidades do frontend
│   │   ├── add.js              # Lógica JS para adicionar itens
│   │   ├── cidade-estados-brasil.js # Script para preencher UF/cidade dinamicamente
│   │   ├── main.js             # Script principal com funções globais
│   │   └── script.js           # Scripts auxiliares ou adicionais
│   ├── 404.html                # Página de erro 404 personalizada
│   ├── adicionar.html          # Página para adicionar novos itens ao inventário
│   ├── admin.html              # Página de administração (provavelmente para gerenciar dados)
│   ├── index.html              # Página inicial do sistema
│   ├── login.html              # Tela de login do usuário
│   ├── new.html                # Outra página para criar novo registro (pode ser cadastro)
│   ├── test.html               # Página de testes ou protótipos
│   ├── user-dashboard.html     # Painel do usuário com dados e ações
│   └── verdocumento_separado.html # Página para visualizar documento de forma isolada
├── .env                        # Variáveis de ambiente (ex: portas, chaves, configs sensíveis)
├── package-lock.json           # Arquivo de controle de versões exatas das dependências
├── package.json                # Arquivo principal de configuração do projeto Node.js
├── readme.md                   # Documentação do projeto, instruções e informações úteis
└── server.js                   # Servidor principal (Node.js/Express) que inicializa a aplicação


```

---

## 👥 Equipe

### Adrian - Programador Web 👨‍💻
**Funções:**
- Desenvolvimento completo do **front-end** e **back-end** do site.
- Implementação de novas funcionalidades, ajustes e correções de bugs.
- Integração de **APIs** e **serviços externos** para aprimorar a experiência do usuário.
- Colaboração estreita com o designer para garantir uma experiência de navegação coesa e intuitiva.

