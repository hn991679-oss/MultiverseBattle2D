// ======================
// MENU SYSTEM
// ======================

let selectedPlayer="Rick";

function chooseRick(){

    selectedPlayer="Rick";

    game.player="Rick";

    game.ally="Morty";

    alert("Bạn chọn Rick");

}

function chooseMorty(){

    selectedPlayer="Morty";

    game.player="Morty";

    game.ally="Rick";

    alert("Bạn chọn Morty");

}

function setEasy(){

    game.difficulty="Easy";

}

function setNormal(){

    game.difficulty="Normal";

}

function setHard(){

    game.difficulty="Hard";

}
