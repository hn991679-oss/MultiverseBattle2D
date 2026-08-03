// =======================
// BATTLE SYSTEM
// =======================

function normalAttack(){

    attack();

}

function useSkill1(){

    skill1();

}

function useSkill2(){

    skill2();

}

function useUltimate(){

    ultimate();

}

// Rick hút DNA

function useCopySkill(){

    copyDNA();

}

// Dùng kỹ năng đã cướp

function useBossSkill(){

    bossSkill();

}

// AI Morty hỗ trợ

function allyAttack(){

    if(game.ally=="Morty"){

        game.enemyHp-=5;

    }

    else{

        game.enemyHp-=7;

    }

    checkBattle();

    updateUI();

}

setInterval(allyAttack,3000);
function updateHP(){

    document.getElementById("playerHP").style.width =
        playerHP + "%";

    document.getElementById("bossHP").style.width =
        bossHP + "%";

}
// ======================
// HIT SYSTEM
// ======================

function checkHit(){

    if(!attacking)
        return;

    let distance =
        Math.abs(playerX-980);

    if(distance<170){

        bossHP -= 5;

        if(bossHP<0)
            bossHP=0;

    }

}
