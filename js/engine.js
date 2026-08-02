// ===== Multiverse Battle 2D Engine =====

const game = {

    player: "Rick",

    ally: "Morty",

    enemy: "Gojo",

    hp: 100,

    enemyHp: 100,

    rage: 0,

    gold: 0,

    stage: 1,

    difficulty: "Normal"

};

// Danh sách boss

const enemies = [

"Gojo",
"Goku",
"Naruto",
"Sasuke",
"Luffy",
"Ichigo",
"Saitama",
"Ben10",
"Doraemon"

];

// Cập nhật giao diện

function updateUI(){

document.querySelector("#playerHealth .health-fill").style.width =
game.hp+"%";

document.querySelector("#enemyHealth .health-fill").style.width =
game.enemyHp+"%";

document.querySelector("#playerRage .rage-fill").style.width =
game.rage+"%";

document.getElementById("goldUI").innerHTML =
"🟡 "+game.gold;

}

// Đánh thường

function attack(){

game.enemyHp-=8;

game.rage+=10;

if(game.rage>100) game.rage=100;

if(game.enemyHp<=0){

winBattle();

}

updateUI();

}

// Thắng

function winBattle(){

game.gold+=300;

game.stage++;

game.enemyHp=100;

game.enemy=
enemies[Math.floor(Math.random()*enemies.length)];

alert("Đã hạ "+game.enemy+"!");

updateUI();

}

// Khởi động

window.onload=()=>{

updateUI();

};
