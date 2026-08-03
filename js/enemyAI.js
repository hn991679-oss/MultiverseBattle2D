let enemy = {
    x: 400,
    y: 200,
    hp: 50,
    attack: 10,
    speed: 2,
    size: 40
};

function enemyMove(){

    let dx = player.x - enemy.x;
    let dy = player.y - enemy.y;

    let distance = Math.sqrt(
        dx * dx + dy * dy
    );

    if(distance > 0){
        enemy.x += (dx / distance) * enemy.speed;
        enemy.y += (dy / distance) * enemy.speed;
    }
}

function drawEnemy(){

    ctx.fillStyle = "red";

    ctx.fillRect(
        enemy.x,
        enemy.y,
        enemy.size,
        enemy.size
    );
}
// ======================
// ALLY AI
// ======================

let allyX = 280;
let allyY = 420;

function updateAllyAI(){

    // Đi về phía Boss
    if(allyX < 900){

        allyX += 2;

    }

}
// ======================
// BOSS AI
// ======================

let bossX = 980;
let bossY = 420;

function updateBossAI(){

    // Đi về phía Player
    if(bossX > playerX + 140){

        bossX -= 2;

    }

}
