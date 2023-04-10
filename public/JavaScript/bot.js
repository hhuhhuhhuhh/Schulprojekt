/*TODO:
Difficulty Button
Bot Anschprechen
Antwort von Bot darstellen
Ship Destroyed einbauen (Wenn Schiff zerstört wird setzte alle 1er Felder zurück
evtl. 3. Schwierigkeit (cheats)
*/

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
let difficulty = 1; //1 = Easy 2 = Medium evtl. später mehr
//let CurrentPlayer = 1; //Nur für Test

function BotMove() { // hier soll der bot hinkommen
  switch (difficulty) {
    case 1:
        return BotEasy();
    case 2:
        return BotMedium();
  };
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

//Bots
function BotEasy(){ //kann nur Zufälligen nicht wiederholten Schuss und aktiviert PlayerChange()
    PlayerChange()
    let shot = Shot()
    feld[shot[1]][shot[0]] = -20
    return shot
}

function BotMedium(){       //Gibt einen Schuss Position zurück und aktiviert PlayerChange()
    let shot = Shot();
    if(NotMarked(shot)){    //Daneben
        feld[shot[1]][shot[0]] = -20
        PlayerChange();
        return shot
    } else {                //Getroffen
        ChangeField(shot);
        return shot
    }
}

//test
/*
function NotMarked(shot){
    return true
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
console.info(feld)*/