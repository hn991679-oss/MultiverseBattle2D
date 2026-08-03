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
// ======================
// SKIN SELECT
// ======================

function showSkins(name){

    let box =
    document.getElementById("skinList");


    box.innerHTML="";


    let skins =
    characters[name].skins;


    for(let skin in skins){

        let btn =
        document.createElement("button");


        btn.innerHTML =
        skin;


        btn.onclick=function(){

            console.log(
            "Chọn skin:",
            skin
            );

        };


        box.appendChild(btn);

    }

}



// ======================
// TEAM SELECT SYSTEM
// ======================

let selectMode = "player";

function selectModeSlot(mode){

    selectMode = mode;

    console.log(
        "Đang chọn:",
        mode
    );

}


function chooseCharacter(name){

    if(!characters[name])
        return;


    if(selectMode === "player"){
        game.player = name;
    }


    if(selectMode === "ally"){
        game.ally = name;
    }


    if(selectMode === "boss"){
        game.boss = name;
    }


    updateTeamUI();

}


function updateTeamUI(){

    document.getElementById("playerName")
    .innerHTML = game.player;


    document.getElementById("allyName")
    .innerHTML = game.ally;


    document.getElementById("bossName")
    .innerHTML = game.boss;

}
// ======================
// BATTLE DATA
// ======================

let battle = {

    player:null,

    ally:null,

    enemy:null

};


// ======================
// START BATTLE
// ======================

function startBattle(){

    battle.player = characters[game.player];

    battle.ally = characters[game.ally];

    battle.enemy = characters[game.boss];


    loadMap();
    spawnCharacters();
    console.log(
        "🔥 START 2 VS 1",
        battle
    );

}
// ======================
// LOAD MAP
// ======================

function loadMap(){

    let map =
    getCharacterMap(game.boss);

    let gameMap =
    document.getElementById("gameMap");


    gameMap.style.display="block";

    gameMap.style.backgroundImage =
    "url('"+map.image+"')";


    document.getElementById("mapName")
    .innerHTML = map.name;

}
