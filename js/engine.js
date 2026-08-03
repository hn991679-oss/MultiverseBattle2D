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
// ======================
// GAME ENGINE
// ======================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const world = {

    width:1280,

    height:720

};


// ======================
// LOAD MAP
// ======================

const mapImage = new Image();


// ======================
// LOAD SPRITES
// ======================

const playerSprite = new Image();

const allySprite = new Image();

const bossSprite = new Image();


// ======================
// DRAW
// ======================

function drawMap(){

    ctx.drawImage(
    playerSprite,
    playerX,
    playerY,
    120,
    180
);

}


function drawCharacters(){

    ctx.drawImage(
        playerSprite,
        120,
        420,
        120,
        180
    );


    ctx.drawImage(
        allySprite,
        280,
        420,
        120,
        180
    );


    ctx.drawImage(
        bossSprite,
        980,
        420,
        120,
        180
    );

}



// ======================
// GAME LOOP
// ======================

function gameLoop(){

    ctx.clearRect(
        0,
        0,
        world.width,
        world.height
    );


    drawMap();

    drawCharacters();


    requestAnimationFrame(gameLoop);

}


gameLoop();
