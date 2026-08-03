// ===========================
// PLAYER SYSTEM
// ===========================

const player = {

    x:150,

    y:350,

    speed:6,

    jump:false,

    attack:false,

    skill:false,

    direction:1

};

function moveLeft(){

    player.x-=player.speed;

    player.direction=-1;

    drawPlayer();

}

function moveRight(){

    player.x+=player.speed;

    player.direction=1;

    drawPlayer();

}

function jump(){

    if(player.jump) return;

    player.jump=true;

    player.y-=120;

    drawPlayer();

    setTimeout(()=>{

        player.y=350;

        player.jump=false;

        drawPlayer();

    },400);

}

function drawPlayer(){

    const p=document.querySelector(".player");

    p.style.left=player.x+"px";

    p.style.bottom=player.y+"px";

    if(player.direction==-1){

        p.style.transform="scaleX(-1)";

    }else{

        p.style.transform="scaleX(1)";

    }

}
let playerX = 120;

let playerY = 420;


function moveLeft(){

    playerX -= 15;

}


function moveRight(){

    playerX += 15;

}


function jump(){

    playerY -= 100;

    setTimeout(function(){

        playerY = 420;

    },300);

}
