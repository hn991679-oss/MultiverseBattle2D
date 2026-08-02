// ============================
// MULTIVERSE BATTLE 2D
// Engine v2
// ============================

const game={

player:"Rick",

ally:"Morty",

enemy:"Gojo",

hp:100,
maxHp:100,

enemyHp:100,
enemyMaxHp:100,

rage:0,

gold:0,

stage:1,

difficulty:"Normal",

copySkill:false,

transform:false

};

// Danh sách boss

const bosses=[

"Gojo",
"Goku",
"Naruto",
"Sasuke",
"Ichigo",
"Luffy",
"Ben10",
"Doraemon",
"Vegeta",
"Madara",
"Sukuna",
"Tanjiro",
"Yuta",
"Levi",
"Eren"

];

//====================

function updateUI(){

document.querySelector("#playerHealth .health-fill").style.width=game.hp+"%";

document.querySelector("#enemyHealth .health-fill").style.width=game.enemyHp+"%";

document.querySelector("#playerRage .rage-fill").style.width=game.rage+"%";

document.getElementById("goldUI").innerHTML="🟡 "+game.gold;

}

//====================
// Đánh thường

function attack(){

game.enemyHp-=8;

game.rage+=8;

enemyAttack();

checkBattle();

updateUI();

}

//====================
// Skill 1

function skill1(){

game.enemyHp-=20;

game.rage+=15;

enemyAttack();

checkBattle();

updateUI();

}

//====================
// Skill 2

function skill2(){

game.enemyHp-=35;

game.rage+=25;

enemyAttack();

checkBattle();

updateUI();

}

//====================
// Ultimate

function ultimate(){

if(game.rage<100){

alert("Chưa đủ nộ!");

return;

}

game.enemyHp-=60;

game.rage=0;

transform();

enemyAttack();

checkBattle();

updateUI();

}

//====================

function transform(){

game.transform=true;

if(game.player=="Rick"){

alert("Rick Prime!");

}

else{

alert("Evil Morty!");

}

}

//====================
// Rick hút DNA

function copyDNA(){

if(game.player!="Rick"){

alert("Chỉ Rick dùng được!");

return;

}

alert("Đã lấy DNA của "+game.enemy);

game.copySkill=true;

}

//====================
// Dùng skill boss

function bossSkill(){

if(!game.copySkill){

alert("Chưa lấy DNA!");

return;

}

game.enemyHp-=45;

alert("Dùng skill của "+game.enemy);

checkBattle();

updateUI();

}

//====================

function enemyAttack(){

game.hp-=Math.floor(Math.random()*8)+5;

}

//====================

function checkBattle(){

if(game.hp<=0){

alert("Thua!");

location.reload();

}

if(game.enemyHp<=0){

game.gold+=300;

game.stage++;

game.enemy=bosses[Math.floor(Math.random()*bosses.length)];

game.enemyHp=100;

alert("Qua màn "+game.stage);

}

}

//====================

window.onload=()=>{

updateUI();

};
