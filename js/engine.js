// ======================
// MULTIVERSE BATTLE MENU
// ======================


let game = {

    player: "Rick",
    ally: "Morty",
    boss: "Sukuna",

    difficulty: "Normal",

    gold: 0
};


let selectedSlot = "player";


// ======================
// CHỌN SLOT
// ======================

function selectSlot(slot){

    selectedSlot = slot;

    console.log(
        "Slot:",
        slot
    );

}


// ======================
// CHỌN NHÂN VẬT
// ======================

function chooseCharacter(name){

    if(!characters[name])
        return;


    if(selectedSlot === "player"){

        game.player = name;

    }


    if(selectedSlot === "ally"){

        game.ally = name;

    }


    if(selectedSlot === "boss"){

        game.boss = name;

    }


    updateMenu();

}


// ======================
// HIỂN THỊ NHÂN VẬT
// ======================

function updateMenu(){

    console.log(
`
⚔️ MULTIVERSE BATTLE

PLAYER:
🧍 ${game.player}

ALLY AI:
🤖 ${game.ally}

VS

BOSS AI:
👹 ${game.boss}

DIFFICULTY:
🔥 ${game.difficulty}
`
    );

}


// ======================
// CHỌN NHANH
// ======================


function chooseRick(){

    game.player="Rick";
    game.ally="Morty";

    updateMenu();

}


function chooseMorty(){

    game.player="Morty";
    game.ally="Rick";

    updateMenu();

}


// ======================
// ĐỘ KHÓ
// ======================

function setEasy(){

    game.difficulty="Easy";

}


function setNormal(){

    game.difficulty="Normal";

}


function setHard(){

    game.difficulty="Hard";

}


// ======================
// BẮT ĐẦU TRẬN
// ======================

function startBattle(){


console.log(
`
🔥 BATTLE START 🔥

${game.player}
+
${game.ally}

        VS

${game.boss}


MODE:
2 VS 1

DIFFICULTY:
${game.difficulty}

`
);


}
// ======================
// GAME ENGINE
// ======================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function gameLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawMap();
    drawCharacters();

    requestAnimationFrame(gameLoop);

}

gameLoop();
