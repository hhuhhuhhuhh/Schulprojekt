/*TODO:
Difficulty Button
Bot Anschprechen
Antwort von Bot darstellen
*/
//test
/*
var TinyShips = {
    ship1: "A1",
    ship2: "B2",
    ship3: "C3",
    ship4: "J2",
    Assigned: ["n", "n", "n", "n"]
  }
  
  var SmallShips = { // hier wird die shiffsposition gespeichert jedes shiff ist ein objekt (also ship1,ship2,ship3) die anzahl der objekt (also schiffe) hängt von der anzahl der platzierbaren schiffe ab.
    ship1: ["A10", "A11"],// Jedes Objekt ist ein array die länge der arrays hängt von der größe des schiffs ab
    ship2: ["L11", "L12"],
    ship3: ["B5", "B6"],
    Assigned: ["n", "n", "n"] // hier wird gespeichert welche schiffe schon eine position zugewiesen bekommen haben die länge dieses arrays hängt von der anzahl der anderen objekte (schiffe) ab n= unbelegt y =belegt
  };
  
  
  var MediumShips = { // selbe wie bei SmallShips nur weniger Objekte(weniger schiffe) und dafür längeres array(größere schiffe)
    ship1: ["D1", "D2", "D3"],
    ship2: ["F1", "F2", "F3"],
    Assigned: ["n", "n"]
  };
  const BigShips = {
    ship1: ["H1", "H2", "H3", "H4"],
    Assigned: "n"
  };*/
//let CurrentPlayer = 1; //Nur für Test

//Variablen
let feld = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//12
];

//Schiffe 
let tinyShipsA = {
    //Position PositionDestroyed ShipDestroyed
    ship1: [0, false, false],
    ship2: [0, false, false],
    ship3: [0, false, false],
    ship4: [0, false, false],
}

let smallShipsA = { // hier wird die shiffsposition gespeichert jedes shiff ist ein objekt (also ship1,ship2,ship3) die anzahl der objekt (also schiffe) hängt von der anzahl der platzierbaren schiffe ab.
    ship1: [0, 0, false, false, false],// Jedes Objekt ist ein array die länge der arrays hängt von der größe des schiffs ab
    ship2: [0, 0, false, false, false],
    ship3: [0, 0, false, false, false],
};

let mediumShipsA = { // selbe wie bei SmallShips nur weniger Objekte(weniger schiffe) und dafür längeres array(größere schiffe)
    ship1: [0, 0, 0, false, false, false, false],
    ship2: [0, 0, 0, false, false, false, false],
};
let bigShipsA = {
    ship1: [0, 0, 0, 0, false, false, false, false, false],
};


let difficulty = 3; //1 = Easy 2 = Medium 3 = Hard




//functions
function Initalise(){
    InitialiseShips()
    InitialiseBot()
}

function InitialiseShips(){
    //Tiny Ships
    tinyShipsA.ship1=[translateStoA(TinyShips.ship1), false, false]
    tinyShipsA.ship2=[translateStoA(TinyShips.ship2), false, false]
    tinyShipsA.ship3=[translateStoA(TinyShips.ship3), false, false]
    tinyShipsA.ship4=[translateStoA(TinyShips.ship4), false, false]
    //console.log('tiny Ships:',tinyShipsA.ship1,tinyShipsA.ship2,tinyShipsA.ship3,tinyShipsA.ship4);

    //Small Ships
    smallShipsA.ship1=[translateStoA(SmallShips.ship1[0]),translateStoA(SmallShips.ship1[1]), false, false, false]
    smallShipsA.ship2=[translateStoA(SmallShips.ship2[0]),translateStoA(SmallShips.ship2[1]), false, false, false]
    smallShipsA.ship3=[translateStoA(SmallShips.ship3[0]),translateStoA(SmallShips.ship3[1]), false, false, false]
    //console.log('Small Ships:',smallShipsA.ship1,smallShipsA.ship2,smallShipsA.ship3);

    //Medium Ships
    mediumShipsA.ship1=[translateStoA(MediumShips.ship1[0]),translateStoA(MediumShips.ship1[1]),translateStoA(MediumShips.ship1[2]), false, false, false, false]
    mediumShipsA.ship2=[translateStoA(MediumShips.ship2[0]),translateStoA(MediumShips.ship2[1]),translateStoA(MediumShips.ship2[2]), false, false, false, false]
    //console.log('Medium Ships:',mediumShipsA.ship1,mediumShipsA.ship2);

    //Big Ship
    bigShipsA.ship1=[translateStoA(BigShips.ship1[0]),translateStoA(BigShips.ship1[1]),translateStoA(BigShips.ship1[2]),translateStoA(BigShips.ship1[3]), false, false, false, false, false]
    //console.log('Big Ships:',bigShipsA.ship1);
}

function InitialiseBot(){
    if(difficulty===3){
        for (let h = 0; h < 12; h++){
            for (let l = 0; l < 12; l++){
                feld[h][l]=-10
            }
        }
    //Tiny
    FieldHardPrepare(tinyShipsA.ship1[0])
    FieldHardPrepare(tinyShipsA.ship2[0])
    FieldHardPrepare(tinyShipsA.ship3[0])
    FieldHardPrepare(tinyShipsA.ship4[0])

    //Small
    FieldHardPrepare(smallShipsA.ship1[0]), FieldHardPrepare(smallShipsA.ship1[1])
    FieldHardPrepare(smallShipsA.ship2[0]), FieldHardPrepare(smallShipsA.ship2[1])
    FieldHardPrepare(smallShipsA.ship3[0]), FieldHardPrepare(smallShipsA.ship3[1])

    //Medium
    FieldHardPrepare(mediumShipsA.ship1[0])
    FieldHardPrepare(mediumShipsA.ship1[1])
    FieldHardPrepare(mediumShipsA.ship1[2])
    FieldHardPrepare(mediumShipsA.ship2[0])
    FieldHardPrepare(mediumShipsA.ship2[1])
    FieldHardPrepare(mediumShipsA.ship2[2])

    //Big
    FieldHardPrepare(bigShipsA.ship1[0])
    FieldHardPrepare(bigShipsA.ship1[1])
    FieldHardPrepare(bigShipsA.ship1[2])
    FieldHardPrepare(bigShipsA.ship1[3])
    }
}

function FieldHardPrepare(shot){
    feld[shot[1]][shot[0]] = 0
    if((shot[1]-1)> -1 && (shot[0]-1)> -1){ //links oben
        feld[shot[1]-1][shot[0]-1] = 0
    }
    if((shot[1]-1> -1) && (shot[0]+1)< 12){ //rechts oben
        feld[shot[1]-1][shot[0]+1] = 0
    }
    if((shot[1]+1< 12) && (shot[0]-1)> -1){ //links unten
        feld[shot[1]+1][shot[0]-1] = 0
    }
    if((shot[1]+1< 12) && (shot[0]+1)< 12){ //rechts unten
        feld[shot[1]+1][shot[0]+1] = 0
    }     
    //Horizintale und Vertikale erhöhen
    if((shot[1]-1)> -1){ //oben
        feld[shot[1]-1][shot[0]] = 0
    }
    if((shot[1]+1)< 12){ //unten
        feld[shot[1]+1][shot[0]] = 0
    }
    if((shot[0]+1)< 12){ //rechts
        feld[shot[1]][shot[0]+1] = 0
    }
    if((shot[0]-1)> -1){ //links
        feld[shot[1]][shot[0]-1] = 0
    }
}

function BotMove() { // hier soll der bot hinkommen
  switch (difficulty) {
    case 1:
        return translateAtoS(BotEasy());
    case 2:
        return translateAtoS(BotMedium());
    case 3: 
        return translateAtoS(BotMedium()) //Hard Bot braucht keiene eigene Funktion
  };
}

function translateAtoS(shot){
    let shot1 = (parseInt(shot[1])+1)
    let shot0 = shot[0]
    switch (shot0){
        case 0:
            return 'A'+shot1
        case 1:
            return 'B'+shot1
        case 2:
            return 'C'+shot1
        case 3:
            return 'D'+shot1
        case 4:
            return 'E'+shot1
        case 5:
            return 'F'+shot1
        case 6:
            return 'G'+shot1
        case 7:
            return 'H'+shot1
        case 8:
            return 'I'+shot1
        case 9:
            return 'J'+shot1
        case 10:
            return 'K'+shot1
        case 11:
            return 'L'+shot1
    }
}

function translateStoA(shot){
    let shot1 = parseInt(shot.replace(/[A-L]/g, ""))-1
    let shot0 = shot.replace(/[\d]/g, "")
    switch (shot0){
        case 'A':
            return [0,shot1]
        case 'B':
            return [1,shot1]
        case 'C':
            return [2,shot1]
        case 'D':
            return [3,shot1]
        case 'E':
            return [4,shot1]
        case 'F':
            return [5,shot1]
        case 'G':
            return [6,shot1]
        case 'H':
            return [7,shot1]
        case 'I':
            return [8,shot1]
        case 'J':
            return [9,shot1]
        case 'K':
            return [10,shot1]
        case 'L':
            return [11,shot1]
    }
}

function Shot(){
    let gibt1 = false //prüfen ob es 1er Felder gibt
    for (let i = 0; i < 12; i++) {
        for (let l = 0; l < 12; l++) {
            if (feld[i][l] === 1){
                gibt1 = true;
            }
          }
      }
    return Smartshot(gibt1);
}

function Smartshot(gibt1){
    let x = Math.floor(Math.random() * 12);
    let y = Math.floor(Math.random() * 12);
    if(gibt1){
        if(feld[y][x] === 1){   //Wenn es 1er Felder gibt schieße nur auf diese 
            return [x,y]
        } else { return Smartshot(gibt1)}
    } else if (feld[y][x] > -1) {//Wenn es keine 1er Felder gibt           
            return [x,y]
        } else {
            return Smartshot(gibt1)
        }
}

function ChangeField(shot){ // Deiagonalen deaktivieren
    //Prüfen ob Felder Außerhalb des Spielfeldes Liegen
    //Getroffenes Feld Sperren
    feld[shot[1]][shot[0]]=-20
    
    //Diagonale Sperren
    if((shot[1]-1)> -1 && (shot[0]-1)> -1){ //links oben
        feld[shot[1]-1][shot[0]-1] = feld[shot[1]-1][shot[0]-1]-10
    }
    if((shot[1]-1> -1) && (shot[0]+1)< 12){ //rechts oben
        feld[shot[1]-1][shot[0]+1] = feld[shot[1]-1][shot[0]+1]-10
    }
    if((shot[1]+1< 12) && (shot[0]-1)> -1){ //links unten
        feld[shot[1]+1][shot[0]-1] = feld[shot[1]+1][shot[0]-1]-10
    }
    if((shot[1]+1< 12) && (shot[0]+1)< 12){ //rechts unten
        feld[shot[1]+1][shot[0]+1] = feld[shot[1]+1][shot[0]+1]-10
    }     
    //Horizintale und Vertikale erhöhen
    if((shot[1]-1)> -1){ //oben
        feld[shot[1]-1][shot[0]] = feld[shot[1]-1][shot[0]]+1
    }
    if((shot[1]+1)< 12){ //unten
        feld[shot[1]+1][shot[0]] = feld[shot[1]+1][shot[0]]+1
    }
    if((shot[0]+1)< 12){ //rechts
        feld[shot[1]][shot[0]+1] = feld[shot[1]][shot[0]+1]+1
    }
    if((shot[0]-1)> -1){ //links
        feld[shot[1]][shot[0]-1] = feld[shot[1]][shot[0]-1]+1
    }
}

function DestroyShips(shot){
    let shot0 = parseInt(shot[0])
    let shot1 = parseInt(shot[1])
    //Tiny
    if ( tinyShipsA.ship1[0][0] === shot0 &&  tinyShipsA.ship1[0][1] === shot1) {tinyShipsA.ship1[1]=true}
    if ( tinyShipsA.ship2[0][0] === shot0 &&  tinyShipsA.ship2[0][1] === shot1) {tinyShipsA.ship2[1]=true}
    if ( tinyShipsA.ship3[0][0] === shot0 &&  tinyShipsA.ship3[0][1] === shot1) {tinyShipsA.ship3[1]=true}
    if ( tinyShipsA.ship4[0][0] === shot0 &&  tinyShipsA.ship4[0][1] === shot1) {tinyShipsA.ship4[1]=true}

    //Small
    if ( smallShipsA.ship1[0][0] === shot0 &&  smallShipsA.ship1[0][1] === shot1) {smallShipsA.ship1[2]=true}
    if ( smallShipsA.ship1[1][0] === shot0 &&  smallShipsA.ship1[1][1] === shot1) {smallShipsA.ship1[3]=true}
    if ( smallShipsA.ship2[0][0] === shot0 &&  smallShipsA.ship2[0][1] === shot1) {smallShipsA.ship2[2]=true}
    if ( smallShipsA.ship2[1][0] === shot0 &&  smallShipsA.ship2[1][1] === shot1) {smallShipsA.ship2[3]=true}
    if ( smallShipsA.ship3[0][0] === shot0 &&  smallShipsA.ship3[0][1] === shot1) {smallShipsA.ship3[2]=true}
    if ( smallShipsA.ship3[1][0] === shot0 &&  smallShipsA.ship3[1][1] === shot1) {smallShipsA.ship3[3]=true}

    //Medium
    if ( mediumShipsA.ship1[0][0] === shot0 &&  mediumShipsA.ship1[0][1] === shot1) {mediumShipsA.ship1[3]=true}
    if ( mediumShipsA.ship1[1][0] === shot0 &&  mediumShipsA.ship1[1][1] === shot1) {mediumShipsA.ship1[4]=true}
    if ( mediumShipsA.ship1[2][0] === shot0 &&  mediumShipsA.ship1[2][1] === shot1) {mediumShipsA.ship1[5]=true}
    if ( mediumShipsA.ship2[0][0] === shot0 &&  mediumShipsA.ship2[0][1] === shot1) {mediumShipsA.ship2[3]=true}
    if ( mediumShipsA.ship2[1][0] === shot0 &&  mediumShipsA.ship2[1][1] === shot1) {mediumShipsA.ship2[4]=true}
    if ( mediumShipsA.ship2[2][0] === shot0 &&  mediumShipsA.ship2[2][1] === shot1) {mediumShipsA.ship2[5]=true}

    //Big
    if ( bigShipsA.ship1[0][0] === shot0 &&  bigShipsA.ship1[0][1] === shot1) {bigShipsA.ship1[4]=true}
    if ( bigShipsA.ship1[1][0] === shot0 &&  bigShipsA.ship1[1][1] === shot1) {bigShipsA.ship1[5]=true}
    if ( bigShipsA.ship1[2][0] === shot0 &&  bigShipsA.ship1[2][1] === shot1) {bigShipsA.ship1[6]=true}
    if ( bigShipsA.ship1[3][0] === shot0 &&  bigShipsA.ship1[3][1] === shot1) {bigShipsA.ship1[7]=true}
    SetShipsDestroyed()
}

function SetShipsDestroyed(){
    //Tiny
    if (tinyShipsA.ship1[1] && tinyShipsA.ship1[2] === false) {tinyShipsA.ship1[2]= true, FieldShipUpdate(tinyShipsA.ship1[0])}
    if (tinyShipsA.ship2[1] && tinyShipsA.ship2[2] === false) {tinyShipsA.ship2[2]= true, FieldShipUpdate(tinyShipsA.ship2[0])}
    if (tinyShipsA.ship3[1] && tinyShipsA.ship3[2] === false) {tinyShipsA.ship3[2]= true, FieldShipUpdate(tinyShipsA.ship3[0])}
    if (tinyShipsA.ship4[1] && tinyShipsA.ship4[2] === false) {tinyShipsA.ship4[2]= true, FieldShipUpdate(tinyShipsA.ship4[0])}

    //Small
    if (smallShipsA.ship1[2] && smallShipsA.ship1[3] && smallShipsA.ship1[4] === false) {smallShipsA.ship1[4]= true, FieldShipUpdate(smallShipsA.ship1[0]), FieldShipUpdate(smallShipsA.ship1[1])}
    if (smallShipsA.ship2[2] && smallShipsA.ship2[3] && smallShipsA.ship2[4] === false) {smallShipsA.ship2[4]= true, FieldShipUpdate(smallShipsA.ship2[0]), FieldShipUpdate(smallShipsA.ship2[1])}
    if (smallShipsA.ship3[2] && smallShipsA.ship3[3] && smallShipsA.ship3[4] === false) {smallShipsA.ship3[4]= true, FieldShipUpdate(smallShipsA.ship3[0]), FieldShipUpdate(smallShipsA.ship3[1])}

    //Medium
    if (mediumShipsA.ship1[3] && mediumShipsA.ship1[4] && mediumShipsA.ship1[5] && mediumShipsA.ship1[6] === false) {mediumShipsA.ship1[6]= true, 
        FieldShipUpdate(mediumShipsA.ship1[0])
        FieldShipUpdate(mediumShipsA.ship1[1])
        FieldShipUpdate(mediumShipsA.ship1[2])}
    if (mediumShipsA.ship2[3] && mediumShipsA.ship2[4] && mediumShipsA.ship2[5] && mediumShipsA.ship2[6] === false) {mediumShipsA.ship2[6]= true,
        FieldShipUpdate(mediumShipsA.ship2[0])
        FieldShipUpdate(mediumShipsA.ship2[1])
        FieldShipUpdate(mediumShipsA.ship2[2])}

    //Big
    if (bigShipsA.ship1[4] && bigShipsA.ship1[5] && bigShipsA.ship1[6] && bigShipsA.ship1[7] && bigShipsA.ship1[8] === false) {bigShipsA.ship1[8]= true,
        FieldShipUpdate(bigShipsA.ship1[0])
        FieldShipUpdate(bigShipsA.ship1[1])
        FieldShipUpdate(bigShipsA.ship1[2])
        FieldShipUpdate(bigShipsA.ship1[3])}
}

function FieldShipUpdate(shot){
    if((shot[1]-1)> -1 && (shot[0]-1)> -1){ //links oben
        feld[shot[1]-1][shot[0]-1] = feld[shot[1]-1][shot[0]-1]-10
    }
    if((shot[1]-1> -1) && (shot[0]+1)< 12){ //rechts oben
        feld[shot[1]-1][shot[0]+1] = feld[shot[1]-1][shot[0]+1]-10
    }
    if((shot[1]+1< 12) && (shot[0]-1)> -1){ //links unten
        feld[shot[1]+1][shot[0]-1] = feld[shot[1]+1][shot[0]-1]-10
    }
    if((shot[1]+1< 12) && (shot[0]+1)< 12){ //rechts unten
        feld[shot[1]+1][shot[0]+1] = feld[shot[1]+1][shot[0]+1]-10
    } 
    if((shot[1]-1)> -1){ //oben
        feld[shot[1]-1][shot[0]] = feld[shot[1]-1][shot[0]]-10
    }
    if((shot[1]+1)< 12){ //unten
        feld[shot[1]+1][shot[0]] = feld[shot[1]+1][shot[0]]-10
    }
    if((shot[0]+1)< 12){ //rechts
        feld[shot[1]][shot[0]+1] = feld[shot[1]][shot[0]+1]-10
    }
    if((shot[0]-1)> -1){ //links
        feld[shot[1]][shot[0]-1] = feld[shot[1]][shot[0]-1]-10
    }
}

function IsShipDestroyed(ship){
    switch (ship){
        //Tiny
        case TinyShips.ship1:
            return tinyShipsA.ship1[2]
        case TinyShips.ship2:
            return tinyShipsA.ship2[2]
        case TinyShips.ship3:
            return tinyShipsA.ship3[2]
        case TinyShips.ship4:
            return tinyShipsA.ship4[2]
        
        //Small
        case SmallShips.ship1:
            return smallShipsA.ship1[4]
        case SmallShips.ship2:
            return smallShipsA.ship2[4]
        case SmallShips.ship3:
            return smallShipsA.ship3[4]

        //Medium
        case MediumShips.ship1:
            return mediumShipsA.ship1[6]
        case MediumShips.ship2:
            return mediumShipsA.ship2[6]

        //Big
        case BigShips.ship1:
            return bigShipsA.ship1[8]
    }
}

//Bots
function BotEasy(){ //kann nur Zufälligen nicht wiederholten Schuss und aktiviert PlayerChange()
    PlayerChange()
    let shot = Shot()
    feld[shot[1]][shot[0]] = -20
    return shot
}

function BotMedium(){       //Gibt einen Schuss Position zurück und aktiviert PlayerChange()
    let shot = Shot();
    if(NotMarked(shot)){    //Daneben //Noch translate
        feld[shot[1]][shot[0]] = -20
        PlayerChange();
        return shot
    } else {                //Getroffen
        ChangeField(shot);
        DestroyShips(shot);
        return shot
    }
}

//test
/*
function NotMarked(shot){
    return false
}

function PlayerChange() { // hier wird der spieler geändert
    if (1 === CurrentPlayer) {
      CurrentPlayer = 2;
    }
    else {
      CurrentPlayer = 1;
    }
  }

for (let b = 0; b < 140; b++) {
    console.log('Shot NR '+b+': '+ BotMove())
}
//console.info(feld)
let shot = [11,11]
console.log(BotMove())

//console.log(translateStoA("A1"))

Initalise()

console.log('tiny Ships:',tinyShipsA.ship1,tinyShipsA.ship2,tinyShipsA.ship3,tinyShipsA.ship4);
console.log('Small Ships:',smallShipsA.ship1,smallShipsA.ship2,smallShipsA.ship3);
console.log('Medium Ships:',mediumShipsA.ship1,mediumShipsA.ship2);
console.log('Big Ships:',bigShipsA.ship1);

console.info(feld)
console.log(translateStoA('L11'))
*/