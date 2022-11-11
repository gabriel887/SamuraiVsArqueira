function rectangularCollision({ rectangle1, rectangle2 }) {

    let offSetX = rectangle1.side === "L" ? 20 : 210;

    let posXArq = rectangle2.position.x - 110;
    let posYArq = rectangle2.position.y;
    let posXFinalArq = rectangle2.position.x + rectangle2.width  - 110;
    let posYFinalArq = rectangle2.position.y + rectangle2.height;

    let posXAtq = rectangle1.attackBox.position.x + offSetX;
    let posYAtq = rectangle1.attackBox.position.y + 10;
    let posXFinalAtq = rectangle1.attackBox.position.x + offSetX + rectangle1.attackBox.width;
    let posYFinalAtq = rectangle1.attackBox.position.y + rectangle1.attackBox.height;

    return ((posXArq <= posXFinalAtq && posXArq >= posXAtq) 
    || (posXFinalArq <= posXFinalAtq && posXFinalArq >= posXAtq))
    && ((posYAtq <= posYFinalArq && posYAtq >= posYArq) || (posYFinalAtq <= posYFinalArq && posYFinalAtq >= posYArq) );
}

function projectileCollision({ rectangle1, rectangle2 }) {

    let offSetX = rectangle1.direction === "L" ? -25 : -30;

    return (
        ((rectangle1.position.x + rectangle1.width + offSetX <= rectangle2.position.x + rectangle2.width &&
                rectangle1.position.x + offSetX >= rectangle2.position.x) ||
            (rectangle1.position.x + offSetX >= rectangle2.position.x + rectangle2.width &&
                rectangle1.position.x + offSetX <= rectangle2.width + rectangle2.position.x))

        &&

        ((rectangle1.position.y + 80 >= rectangle2.position.y &&
                rectangle1.position.y + 80 <= rectangle2.position.y + rectangle2.height) ||
            (rectangle1.position.y + 80 + rectangle1.height >= rectangle2.position.y &&
                rectangle1.position.y + 80 + rectangle1.height <= rectangle2.position.y + rectangle2.height))
    );
}

function determineWinner(player1, player2, timerId) {
    clearTimeout(timerId);
    document.querySelector("#resultado").style.display = "flex";
    if (player1.health === player2.health) {
        document.querySelector("#resultado").innerHTML = "Empate. Decepcionante vocês.";
    } else if (player1.health <= player2.health) {
        document.querySelector("#resultado").innerHTML = "O jogador 2 Ganhou. Parabéns.";
    } else if (player1.health >= player2.health) {
        document.querySelector("#resultado").innerHTML = "O jogador 1 Ganhou. Parabéns.";
    }
}

let timer = 120;
let timerId;

function decreaseTimer() {
    if (timer > 0) {
        timer--;
        document.querySelector("#timer").innerHTML = timer;
        timerId = setTimeout(decreaseTimer, 1000);
    }
    if (timer === 0) {
        determineWinner(player, enemy, timerId);
    }
}