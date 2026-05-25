<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Meu Currículo</title>

  <!-- Fonte -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

  <!-- Ícones -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: #0f0b1f;
      color: #f5f5f5;
      line-height: 1.6;
    }

    /* MENU */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(15, 11, 31, 0.95);
      backdrop-filter: blur(10px);
      padding: 18px 10%;
      display: flex;
      justify-content: center;
      gap: 35px;
      z-index: 1000;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    nav a {
      text-decoration: none;
      color: #d5c6ff;
      font-size: 14px;
      transition: 0.3s;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    nav a:hover {
      color: #b06cff;
      transform: translateY(-2px);
    }

    /* HERO */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 20px 40px;
      background: linear-gradient(
        180deg,
        #120d25 0%,
        #1b1238 100%
      );
    }

    .hero-content h1 {
      font-size: 55px;
      color: #ffffff;
    }

    .hero-content span {
      color: #b06cff;
    }

    .hero-content p {
      max-width: 650px;
      margin: 20px auto;
      color: #c8c8c8;
      font-size: 18px;
    }

    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 28px;
      background: #8b4dff;
      color: white;
      border-radius: 30px;
      text-decoration: none;
      transition: 0.3s;
    }

    .btn:hover {
      background: #a66cff;
      transform: scale(1.05);
    }

    /* SEÇÕES */
    section {
      padding: 100px 10%;
    }

    .title {
      font-size: 32px;
      margin-bottom: 35px;
      color: #c89cff;
      text-align: center;
    }

    .card {
      background: #1a1430;
      padding: 30px;
      border-radius: 18px;
      margin-bottom: 25px;
      border: 1px solid rgba(255,255,255,0.05);
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: #8b4dff;
    }

    .card h3 {
      margin-bottom: 10px;
      color: #ffffff;
    }

    .card p {
      color: #cfcfcf;
    }

    /* SKILLS */
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }

    .skill {
      background: #2b1f4f;
      padding: 12px 22px;
      border-radius: 30px;
      color: #d7bfff;
      font-size: 14px;
    }

    /* FOOTER */
    footer {
      text-align: center;
      padding: 30px;
      color: #9a9a9a;
      border-top: 1px solid rgba(255,255,255,0.05);
    }

    @media (max-width: 768px) {
      nav {
        gap: 18px;
        padding: 15px;
        flex-wrap: wrap;
      }

      .hero-content h1 {
        font-size: 38px;
      }

      .hero-content p {
        font-size: 16px;
      }

      section {
        padding: 80px 7%;
      }
    }
  </style>
</head>

<body>

  <!-- MENU -->
  <nav>
    <a href="#sobre"><i class="fa-solid fa-user"></i> Sobre</a>
    <a href="#formacao"><i class="fa-solid fa-graduation-cap"></i> Formação</a>
    <a href="#certificados"><i class="fa-solid fa-certificate"></i> Certificados</a>
    <a href="#habilidades"><i class="fa-solid fa-code"></i> Skills</a>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <h1>Olá, eu sou <span>Seu Nome</span></h1>
      <p>
        Desenvolvedor focado em criar experiências modernas,
        minimalistas e funcionais para web.
      </p>

      <a href="#sobre" class="btn">Ver Currículo</a>
    </div>
  </section>

  <!-- SOBRE -->
  <section id="sobre">
    <h2 class="title">Sobre Mim</h2>

    <div class="card">
      <h3>Quem sou eu</h3>
      <p>
        Sou um desenvolvedor apaixonado por tecnologia,
        design minimalista e desenvolvimento web.
        Tenho interesse em front-end, UI/UX e criação
        de interfaces modernas e responsivas.
      </p>
    </div>
  </section>

  <!-- FORMAÇÃO -->
  <section id="formacao">
    <h2 class="title">Formação Acadêmica</h2>
    <div class="card">
      <h3>Ensino Médio / Graduação</h3>
      <p>Nome da Escola ou Faculdade (Ano Início - Ano Término)</p>
    </div>
  </section>
  
  <section id="cursos-complementares">
    <h2 class="title">Cursos Complementares</h2>
  
    <div class="card">
      <h3>Curso de Inglês (Duração: 3 anos)</h3>
      <p>Nome da Escola / Instituição</p>
      <p>Foco em conversação, escrita e interpretação de textos (Nível Intermediário/Avançado).</p>
    </div>
  
    <div class="card">
      <h3>Informática Profissionalizante (Duração: 3 anos)</h3>
      <p>Nome da Escola / Instituição</p>
      <p>Domínio do Pacote Office (Word, Excel, PowerPoint), sistemas operacionais e ferramentas de produtividade.</p>
    </div>
  </section>
  
  <!-- CERTIFICADOS -->
  <section id="certificados">
    <h2 class="title">Certificados</h2>
  
    <div class="card">
      <a href="https://cursos.alura.com.br/user/amanda-freitas15/course/scratch-efeitos-especiais/certificate" target="_blank" rel="noopener noreferrer">
        <h3>Scratch: Efeitos Especiais</h3>
        <p>Curso focado no desenvolvimento de animações e efeitos visuais utilizando a linguagem de blocos Scratch.</p>
      </a>
    </div>
  
    <div class="card">
      <a href="https://cursos.alura.com.br/user/amanda-freitas15/course/introducao-a-programacao-com-c-parte-2/certificate" target="_blank" rel="noopener noreferrer">
        <h3>Introdução à Programação com C# - Parte 2</h3>
        <p>Aprofundamento na linguagem C#, explorando estruturas de dados, funções e lógica orientada a objetos.</p>
      </a>
    </div>
  
    <div class="card">
      <a href="https://cursos.alura.com.br/user/amanda-freitas15/course/logica-programacao-mergulhe-programacao-javascript/certificate" target="_blank" rel="noopener noreferrer">
        <h3>Lógica de Programação: Mergulhe em JavaScript</h3>
        <p>Desenvolvimento do pensamento lógico e fundamentos de programação utilizando a linguagem JavaScript.</p>
      </a>
    </div>
  
    <div class="card">
      <a href="https://cursos.alura.com.br/user/amanda-freitas15/course/praticando-python-lacos-for-while/certificate" target="_blank" rel="noopener noreferrer">
        <h3>Praticando Python: Laços For e While</h3>
        <p>Domínio e aplicação prática de estruturas de repetição e controle de fluxo na linguagem Python.</p>
      </a>
    </div>
  </section>
  <!-- HABILIDADES -->
  <section id="habilidades">
    <h2 class="title">Habilidades</h2>

    <div class="skills">
      <div class="skill">HTML5</div>
      <div class="skill">CSS3</div>
      <div class="skill">JavaScript</div>
      <div class="skill">React</div>
      <div class="skill">Git</div>
      <div class="skill">UI/UX</div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    © 2026 - Seu Nome | Currículo Online
  </footer>

</body>
</html>
