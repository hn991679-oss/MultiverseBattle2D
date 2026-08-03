// ======================
// MAP DATABASE
// ======================

const maps = {

    HiddenLeaf:{

        id:"HiddenLeaf",

        name:"Làng Lá",

        image:"assets/maps/hiddenleaf.jpg"

    },

    Shibuya:{

        id:"Shibuya",

        name:"Shibuya",

        image:"assets/maps/shibuya.jpg"

    },

    KameHouse:{

        id:"KameHouse",

        name:"Đảo Kame",

        image:"assets/maps/kamehouse.jpg"

    },

    SoulSociety:{

        id:"SoulSociety",

        name:"Soul Society",

        image:"assets/maps/soulsociety.jpg"

    },

    Wano:{

        id:"Wano",

        name:"Wano",

        image:"assets/maps/wano.jpg"

    },

    Citadel:{

        id:"Citadel",

        name:"Citadel of Ricks",

        image:"assets/maps/citadel.jpg"

    },

    Shiganshina:{

        id:"Shiganshina",

        name:"Shiganshina",

        image:"assets/maps/shiganshina.jpg"

    }

};


// ======================
// CHỌN MAP
// ======================

function getCharacterMap(name){

    switch(name){

        case "Naruto":
        case "Sasuke":
        case "Madara":

            return maps.HiddenLeaf;


        case "Gojo":
        case "Sukuna":
        case "Yuta":

            return maps.Shibuya;


        case "Goku":
        case "Vegeta":

            return maps.KameHouse;


        case "Ichigo":

            return maps.SoulSociety;


        case "Luffy":

            return maps.Wano;


        case "Rick":
        case "Morty":

            return maps.Citadel;


        case "Levi":

            return maps.Shiganshina;


        default:

            return maps.HiddenLeaf;

    }

}
