"use strict";

import {
  x,
  o,
  boxes,
  buttons,
  buttonMenu,
  messageContainer,
  messageText,
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

export function checkEl() {
  // ---
  let xOuBola;

  if (gameState.player1 === gameState.player2) {
    xOuBola = x; // Elemento a ser clonado vira o "x"
  } else {
    xOuBola = o; // Elemento a ser clonado vira o "o"
  }
  return xOuBola;
}

// --- Ai Player

export function computerPlay() {
  // ---
  let cloneO = o.cloneNode(true);
  let counter = 0;
  let filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    // ---
    let randomNumber = Math.floor(Math.random() * 5);

    // Verifica se está vazio a box para preencher

    if (boxes[i].childNodes[0] === undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      // Checagem de quantas box estão preenchidas
    } else {
      filled++;
    }
  }

  if (counter === 0 && filled < 9) {
    computerPlay();
  }
}

// --- Verifica quem foi o vencedor

export function checkWinCondition() {
  // ---
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // --- Horizontais

  // --- Box 1 a 3

  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    // ---
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child === "x" && b2Child === "x" && b3Child === "x") {
      // --- x
      declareWinner("x");
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
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child === "x" && b5Child === "x" && b6Child === "x") {
      // --- x
      declareWinner("x");
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
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child === "x" && b8Child === "x" && b9Child === "x") {
      // --- x
      declareWinner("x");
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
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child === "x" && b4Child === "x" && b7Child === "x") {
      // --- x
      declareWinner("x");
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
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child === "x" && b5Child === "x" && b8Child === "x") {
      // --- x
      declareWinner("x");
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
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child === "x" && b6Child === "x" && b9Child === "x") {
      // --- x
      declareWinner("x");
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
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child === "x" && b5Child === "x" && b9Child === "x") {
      // --- x
      declareWinner("x");
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
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child === "x" && b5Child === "x" && b7Child === "x") {
      // --- x
      declareWinner("x");
    } else if (b3Child === "o" && b5Child === "o" && b7Child === "o") {
      // --- o
      declareWinner("o");
    }
  }

  // --- Deu velha

  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter === 9 && !gameState.isGameLocked) {
    declareWinner();
  }
}

// Declara o vencedor, reseta o tabuleiro e atualiza o placar

export function declareWinner(winner) {
  // ---

  gameState.isGameLocked = true; // Trava o tabuleiro até resetar

  let scoreBoardX = document.querySelector("#scoreboard-1");
  let scoreBoardO = document.querySelector("#scoreboard-2");

  let msg = "";

  if (winner === "x") {
    // ---
    scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
    msg = "O jogador X venceu!";
  } else if (winner === "o") {
    // ---
    scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
    msg = "O jogador O venceu!";
  } else {
    msg = "Deu velha!";
  }

  // Exibe a mensagem

  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // Esconde a mensagem

  setTimeout(() => {
    messageContainer.classList.add("hide");
  }, 3000);

  // Zera as jogadas

  gameState.player1 = 0;
  gameState.player2 = 0;

  // Reseta o tabuleiro

  setTimeout(() => {
    // ---
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

    gameState.isGameLocked = false; // Destrava o tabuleiro para a próxima partida
    // ---
  }, 3000);
}

// Botão Menu

export function menu() {
  // ---

  let tabuleiro = document.querySelector("#container-jogo");
  tabuleiro.classList.add("hide");

  let divPlacar = document.querySelector("#container-score");
  divPlacar.classList.add("hide");

  let boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }

  gameState.player1 = 0;
  gameState.player2 = 0;

  let placarX = document.querySelector("#scoreboard-1");
  let placarO = document.querySelector("#scoreboard-2");
  placarX.textContent = 0;
  placarO.textContent = 0;

  gameState.secondPlayer = undefined;

  buttonMenu.classList.add("hide");

  for (let k = 0; k < buttons.length; k++) {
    buttons[k].classList.remove("hide");
  }
}
