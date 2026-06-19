# ⭕ Jogo da Velha (Tic-Tac-Toe) ❌

Um clássico jogo da velha desenvolvido inteiramente com **HTML, CSS e JavaScript Vanilla**. Este projeto foi criado com o objetivo de aprimorar a lógica de programação, o uso de CSS Grid/Flexbox para layouts responsivos e, principalmente, a manipulação do DOM através de uma **arquitetura modular** em JavaScript.

## 💻 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização com variáveis, layouts fluidos (Flexbox e Grid) e responsividade para dispositivos móveis.
- **JavaScript (ES6+):** Lógica do jogo, eventos e manipulação do DOM separados em módulos (`app.js`, `dom.js`, `function.js`) para melhor organização e escalabilidade.

## ✨ Funcionalidades

- **Modo 2 Jogadores:** Jogue localmente com um amigo.
- **Modo contra a IA:** Enfrente o computador em partidas rápidas.
- **Placar Dinâmico:** Contagem de vitórias em tempo real para ambos os jogadores ou IA.
- **Design Responsivo:** O tabuleiro e o menu se adaptam perfeitamente a diferentes tamanhos de tela (desktop e mobile).
- **Prevenção de Erros:** Bloqueio do tabuleiro durante as animações e transições de vitória para evitar cliques acidentais.

## 🚀 Como Executar o Projeto

Como é um projeto Vanilla Frontend, não é necessária nenhuma instalação complexa de dependências.

1. Faça o download do projeto.
2. Abra a pasta principal e depois entre na pasta "frontend".
3. Utilize a extensão `Live Server` no VS Code para abrir o index.html.

## 🧠 Oportunidades de Melhoria

Este foi o meu primeiro projeto em minha jornada de aprendizagem na programação. Por conta disso, ele possui alguns pontos de melhoria, como a lógica por trás do modo "contra IA", onde a função `computerPlay()` escolhe os espaços vazios de forma majoritariamente aleatória utilizando `Math.random()`.

Outras melhorias possíveis seriam:

- **Armazenamento de Placar**: Integrar o `localStorage` do navegador para que o placar não seja zerado caso o usuário atualize a página acidentalmente.

- **Animações de Vitória**: Destacar visualmente (com uma cor diferente ou um risco na tela) a linha, coluna ou diagonal que garantiu a vitória.
