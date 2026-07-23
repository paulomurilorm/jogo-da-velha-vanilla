"use strict";

import {
  boxes,
  buttons,
  buttonMenu,
  messageContainer,
  gameBoard,
  scoreBoard,
} from "./dom.js";

import {
  gameState,
  checkElement,
  computerPlay,
  checkWinCondition,
  menu,
} from "./function.js";

// EVENTOS

// Seleção do modo de jogo

for (let i = 0; i < buttons.length; i++) {
  // ---
  buttons[i].addEventListener("click", function () {
    // ---
    if (!gameState.travaBotaoModoJogo) {
      // ---
      gameState.travaBotaoModoJogo = true;
      gameState.secondPlayer = this.getAttribute("id");
      document.body.style.cursor = "wait";

      setTimeout(() => {
        // ---
        gameBoard.classList.remove("hide");
        scoreBoard.classList.remove("hide");

        for (let p = 0; p < buttons.length; p++) {
          // ---
          buttons[p].classList.add("hide");
        }

        buttonMenu.classList.remove("hide");
        gameState.isGameLocked = false;
        gameState.travaBotaoModoJogo = false;
        document.body.style.cursor = "default";
        // ---
      }, 1000);
      // ---
    } else {
      // ---
      return;
    }
  });
}

// Voltar ao menu

buttonMenu.addEventListener("click", function () {
  // ---
  if (
    messageContainer.classList.contains("hide") &&
    !gameState.travaBotaoMenu
  ) {
    // ---
    gameState.travaBotaoMenu = true;
    gameState.isGameLocked = true;
    document.body.style.cursor = "wait";

    setTimeout(() => {
      // ---
      menu();
      gameState.travaBotaoMenu = false;
      document.body.style.cursor = "default";
      // ---
    }, 1000);
    // ---
  } else {
    // ---
    return;
  }
});

// Click nas boxes

for (let i = 0; i < boxes.length; i++) {
  // ---
  boxes[i].addEventListener("click", function () {
    // ---

    if (gameState.isGameLocked) return; // Trava para não interagir quando terminar o jogo

    const element = checkElement();

    // Verifica se já tem um elemento na box.

    if (this.childNodes.length === 0) {
      // ---
      const cloneElement = element.cloneNode(true);

      this.appendChild(cloneElement);

      // Computa a jogada

      if (gameState.player1 === gameState.player2) {
        // ---
        gameState.player1++;
        checkWinCondition();

        if (gameState.secondPlayer === "ai-player" && !gameState.isGameLocked) {
          // --- Função executar jogada
          gameState.isGameLocked = true;
          document.body.style.cursor = "wait"; // Cursor do mouse fica na bolinha de carregando

          setTimeout(() => {
            // ---
            computerPlay();
            gameState.player2++;

            checkWinCondition();
            document.body.style.cursor = "default"; // Volta o cursor do mouse para o formato padrão

            if (messageContainer.classList.contains("hide")) {
              // ---
              gameState.isGameLocked = false;
            }
            // ---
          }, 500);
        }
        // ---
      } else {
        // ---
        gameState.player2++;
        checkWinCondition();
      }
    }
  });
}
