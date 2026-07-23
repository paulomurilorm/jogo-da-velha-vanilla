"use strict";

import {
  x,
  o,
  boxes,
  buttons,
  buttonMenu,
  messageContainer,
  messageText,
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  scoreBoardX,
  scoreBoardO,
  scoreBoard,
  gameBoard,
} from "./dom.js";

// VARIÁVEIS GLOBAIS

export let gameState = {
  player1: 0,
  player2: 0,
  isGameLocked: false,
  travaBotaoModoJogo: false,
  travaBotaoMenu: false,
  secondPlayer: "",
};

//  FUNÇÕES

// --- Determina qual será elemento a aparecer na tela quando clicar nas boxes.

export function checkElement() {
  // ---
  let ticTacToe;

  if (gameState.player1 === gameState.player2) {
    // ---
    ticTacToe = x; // Elemento a ser clonado vira o "x"
    // ---
  } else {
    // ---
    ticTacToe = o; // Elemento a ser clonado vira o "o"
  }
  return ticTacToe;
}

// --- Ai Player

export function computerPlay() {
  // ---
  const cloneO = o.cloneNode(true);
  let counter = 0;
  let filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    // ---
    let randomNumber = Math.floor(Math.random() * 5);

    // Verifica se está vazio a box para preencher

    if (boxes[i].childNodes[0] === undefined) {
      // ---
      if (randomNumber <= 1) {
        // ---
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      // Checagem de quantas box estão preenchidas
    } else {
      // ---
      filled++;
    }
  }

  if (counter === 0 && filled < 9) {
    // ---
    computerPlay();
  }
}

// --- Verifica quem foi o vencedor

export function checkWinCondition() {
  // --- Horizontais

  // --- Box 1 a 3

  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    // ---
    const b1Child = b1.childNodes[0].className;
    const b2Child = b2.childNodes[0].className;
    const b3Child = b3.childNodes[0].className;

    if (b1Child === "x" && b2Child === "x" && b3Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b1Child === "o" && b2Child === "o" && b3Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Box 4 a 6

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    // ---
    const b4Child = b4.childNodes[0].className;
    const b5Child = b5.childNodes[0].className;
    const b6Child = b6.childNodes[0].className;

    if (b4Child === "x" && b5Child === "x" && b6Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b4Child === "o" && b5Child === "o" && b6Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Box 7 a 9

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    // ---
    const b7Child = b7.childNodes[0].className;
    const b8Child = b8.childNodes[0].className;
    const b9Child = b9.childNodes[0].className;

    if (b7Child === "x" && b8Child === "x" && b9Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b7Child === "o" && b8Child === "o" && b9Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Verticais

  // --- Box 1, 4 e 7

  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    // ---
    const b1Child = b1.childNodes[0].className;
    const b4Child = b4.childNodes[0].className;
    const b7Child = b7.childNodes[0].className;

    if (b1Child === "x" && b4Child === "x" && b7Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b1Child === "o" && b4Child === "o" && b7Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Box 2, 5 e 8

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    // ---
    const b2Child = b2.childNodes[0].className;
    const b5Child = b5.childNodes[0].className;
    const b8Child = b8.childNodes[0].className;

    if (b2Child === "x" && b5Child === "x" && b8Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b2Child === "o" && b5Child === "o" && b8Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Box 3, 6 e 9

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    // ---
    const b3Child = b3.childNodes[0].className;
    const b6Child = b6.childNodes[0].className;
    const b9Child = b9.childNodes[0].className;

    if (b3Child === "x" && b6Child === "x" && b9Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b3Child === "o" && b6Child === "o" && b9Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Diagonais

  // --- Box 1, 5 e 9

  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    // ---
    const b1Child = b1.childNodes[0].className;
    const b5Child = b5.childNodes[0].className;
    const b9Child = b9.childNodes[0].className;

    if (b1Child === "x" && b5Child === "x" && b9Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b1Child === "o" && b5Child === "o" && b9Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // Box 3, 5 e 7

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    // ---
    const b3Child = b3.childNodes[0].className;
    const b5Child = b5.childNodes[0].className;
    const b7Child = b7.childNodes[0].className;

    if (b3Child === "x" && b5Child === "x" && b7Child === "x") {
      // --- x
      declareWinner("x");
      // ---
    } else if (b3Child === "o" && b5Child === "o" && b7Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Deu velha

  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    // ---
    if (boxes[i].childNodes[0] != undefined) {
      // ---
      counter++;
    }
  }

  if (counter === 9 && !gameState.isGameLocked) {
    // ---
    declareWinner();
  }
}

// Declara o vencedor, reseta o tabuleiro e atualiza o placar

function declareWinner(winner) {
  // ---
  gameState.isGameLocked = true; // Trava o tabuleiro até resetar

  let msg = "";

  if (winner === "x") {
    // ---
    scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
    msg = "O jogador X venceu!";
    // ---
  } else if (winner === "o") {
    // ---
    scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
    msg = "O jogador O venceu!";
    // ---
  } else {
    // ---
    msg = "Deu velha!";
  }

  // Exibe a mensagem

  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // Esconde a mensagem

  setTimeout(() => {
    // ---
    messageContainer.classList.add("hide");
    // ---
  }, 3000);

  // Zera as jogadas

  gameState.player1 = 0;
  gameState.player2 = 0;

  // Reseta o tabuleiro

  setTimeout(() => {
    // ---
    const boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
      // ---
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

    gameState.isGameLocked = false; // Destrava o tabuleiro para a próxima partida
    // ---
  }, 3000);
}

// Botão Menu

export function menu() {
  // ---
  gameBoard.classList.add("hide");
  scoreBoard.classList.add("hide");

  const boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    // ---
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }

  gameState.player1 = 0;
  gameState.player2 = 0;

  scoreBoardX.textContent = 0;
  scoreBoardO.textContent = 0;

  gameState.secondPlayer = undefined;

  buttonMenu.classList.add("hide");

  for (let k = 0; k < buttons.length; k++) {
    // ---
    buttons[k].classList.remove("hide");
  }
}
