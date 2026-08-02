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



function chooseCharacter(name){

    if(!characters[name])
        return;


    game.player=name;


    showSkins(name);


    updateMenu();

}
