# Plateia React - Documentação Completa

Bem-vindo à documentação completa do projeto Plateia React. Este documento serve como um guia detalhado para entender a estrutura, o propósito e o funcionamento de cada parte do código. 

## 1. Visão Geral do Projeto

Plateia é uma aplicação web construída com React, projetada para ajudar usuários a aprimorar suas habilidades de comunicação e oratória. A plataforma oferece um ambiente para prática de apresentações, recebimento de feedback e acesso a recursos para desenvolvimento pessoal.

### Tecnologias Utilizadas

*   **React:** Biblioteca principal para a construção da interface de usuário.
*   **React Router DOM:** Para gerenciamento de rotas e navegação entre páginas.
*   **Styled Components:** Para estilização dos componentes, permitindo a escrita de CSS diretamente no JavaScript.
*   **React Scroll:** Para navegação com rolagem suave para seções específicas da página.
*   **React Intersection Observer:** Para criar animações que são ativadas quando um elemento se torna visível na tela.

## 2. Como Executar o Projeto

Para executar o projeto em seu ambiente de desenvolvimento local, siga os passos abaixo:

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 14 ou superior)
*   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

### Instalação

1.  Clone o repositório para sua máquina local.
2.  Navegue até o diretório raiz do projeto pelo terminal.
3.  Instale as dependências do projeto com o seguinte comando:

    ```bash
    npm install
    ```

### Execução

Após a instalação das dependências, inicie o servidor de desenvolvimento:

```bash
npm start
```

Isso iniciará a aplicação em modo de desenvolvimento e a abrirá em seu navegador padrão, geralmente no endereço [http://localhost:3000](http://localhost:3000).

## 3. Estrutura de Arquivos

A estrutura de arquivos do projeto é organizada da seguinte forma:

```
plateia-react/
├── public/             # Arquivos estáticos e HTML principal
│   ├── index.html
│   └── images/         # Imagens utilizadas no projeto
├── src/                # Código-fonte da aplicação
│   ├── components/     # Componentes reutilizáveis
│   │   ├── FadeIn.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Layout.js
│   │   ├── LoginForm.js
│   │   └── RegisterForm.js
│   ├── pages/          # Componentes que representam páginas inteiras
│   │   ├── ContactPage.js
│   │   ├── HomePage.js
│   │   ├── PrivacyPolicyPage.js
│   │   └── TermsOfServicePage.js
│   ├── App.js          # Componente principal que define as rotas
│   ├── index.css       # Estilos globais
│   └── index.js        # Ponto de entrada da aplicação React
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este arquivo
```

## 4. Detalhamento dos Arquivos

### `src/App.js`

Este é o componente central que gerencia a navegação da aplicação. Ele utiliza o `react-router-dom` para mapear as URLs para os componentes de página correspondentes.

*   **Funcionalidade:** Define as rotas da aplicação.
*   **Componentes Importados:** `HomePage`, `ContactPage`, `TermsOfServicePage`, `PrivacyPolicyPage`, `LoginForm`, `RegisterForm`.
*   **Rotas Definidas:**
    *   `/`: Renderiza a `HomePage`.
    *   `/login`: Renderiza o `LoginForm`.
    *   `/register`: Renderiza o `RegisterForm`.
    *   `/contato`: Renderiza a `ContactPage`.
    *   `/termos-de-servico`: Renderiza a `TermsOfServicePage`.
    *   `/politica-de-privacidade`: Renderiza a `PrivacyPolicyPage`.

### `src/pages/HomePage.js`

A página principal da aplicação, servindo como a landing page.

*   **Funcionalidade:** Apresenta a plataforma, seus recursos e depoimentos de usuários.
*   **Componentes Importados:** `Layout`, `FadeIn`.
*   **Estado (State):**
    *   `currentIndex`: (Number) Controla o slide atual no carrossel de depoimentos.
    *   `isPaused`: (Boolean) Pausa a transição automática do carrossel quando o mouse está sobre ele.
*   **Funções:**
    *   `nextSlide()`: Avança para o próximo depoimento no carrossel.
    *   `prevSlide()`: Retorna ao depoimento anterior.
    *   `goToSlide(index)`: Navega para um depoimento específico.
*   **Seções:**
    *   **Hero Section:** Uma seção de boas-vindas com uma imagem de fundo e um chamado para ação (CTA).
    *   **Features:** Apresenta os principais recursos da plataforma.
    *   **Testimonials:** Um carrossel automático com depoimentos de usuários.
    *   **CTA Section:** Uma seção final incentivando o usuário a se registrar.

### `src/pages/ContactPage.js`

Página com um formulário para os usuários entrarem em contato.

*   **Funcionalidade:** Permite que os usuários enviem mensagens.
*   **Componentes Importados:** `Layout`, `FadeIn`.
*   **Funções:**
    *   `handleSubmit(e)`: É acionada no envio do formulário. Atualmente, exibe um alerta de confirmação (simulado).

### `src/pages/TermsOfServicePage.js` e `src/pages/PrivacyPolicyPage.js`

Páginas estáticas que exibem os termos de serviço e a política de privacidade, respectivamente.

*   **Funcionalidade:** Apresentam informações legais importantes para o usuário.
*   **Componentes Importados:** `Layout`, `FadeIn`.

### `src/components/Layout.js`

Um componente que define a estrutura visual padrão para todas as páginas.

*   **Funcionalidade:** Garante uma aparência consistente ao incluir o `Header` e o `Footer` em todas as páginas.
*   **Componentes Importados:** `Header`, `Footer`.
*   **Props:**
    *   `children`: O conteúdo da página que será renderizado entre o cabeçalho e o rodapé.

### `src/components/Header.js`

O cabeçalho da aplicação, presente em todas as páginas.

*   **Funcionalidade:** Fornece a navegação principal, o logo da marca e os botões de autenticação.
*   **Estado (State):**
    *   `isMenuOpen`: (Boolean) Controla a visibilidade do menu de navegação em dispositivos móveis.
*   **Navegação:**
    *   Utiliza `NavLink` para links de páginas, que recebem um estilo especial quando a rota está ativa.
    *   Utiliza `ScrollLink` para navegar suavemente para a seção de "Recursos" na `HomePage`.

### `src/components/Footer.js`

O rodapé da aplicação, presente em todas as páginas.

*   **Funcionalidade:** Exibe links úteis, informações de contato, links para redes sociais e o aviso de direitos autorais.
*   **Navegação:** Contém links para as páginas de `Termos de Serviço`, `Política de Privacidade`, `Contato`, e também um `ScrollLink` para a seção de "Recursos".

### `src/components/FadeIn.js`

Um componente de animação que aplica um efeito de "fade in" (aparecimento suave) aos seus elementos filhos.

*   **Funcionalidade:** A animação é acionada quando o componente entra na área visível da tela, utilizando o `react-intersection-observer`.
*   **Props:**
    *   `children`: Os elementos que receberão a animação.
    *   `delay`: (String) Um atraso opcional para o início da animação (ex: `'0.2s'`).

### `src/components/LoginForm.js`

Um formulário para que os usuários existentes possam fazer login.

*   **Funcionalidade:** Coleta e-mail e senha e simula um processo de login.
*   **Estado (State):**
    *   `email`: (String) Armazena o e-mail inserido pelo usuário.
    *   `password`: (String) Armazena a senha inserida.
    *   `error`: (String) Armazena mensagens de erro de validação.
*   **Funções:**
    *   `handleSubmit(e)`: Valida os campos e, se estiverem preenchidos, simula o login exibindo um alerta.

### `src/components/RegisterForm.js`

Um formulário para que novos usuários possam criar uma conta.

*   **Funcionalidade:** Coleta nome, e-mail e senha e simula um processo de registro.
*   **Estado (State):**
    *   `name`: (String) Armazena o nome do usuário.
    *   `email`: (String) Armazena o e-mail.
    *   `password`: (String) Armazena a senha.
    *   `confirmPassword`: (String) Armazena a confirmação da senha.
    *   `error`: (String) Armazena mensagens de erro.
*   **Funções:**
    *   `handleSubmit(e)`: Valida os campos, verifica se as senhas coincidem e, se tudo estiver correto, simula o registro com um alerta.

## 5. Conclusão

Este documento fornece uma visão abrangente do projeto Plateia React. Com ele, qualquer desenvolvedor deve ser capaz de entender o propósito do código, como executá-lo e como cada parte se encaixa no todo. Para mais detalhes sobre uma função ou variável específica, consulte o código-fonte correspondente.
