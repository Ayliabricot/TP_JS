let nomJour = "Mercredi";
let numJour = 4;
let nomMois = "Février";
let isHiver = true;

let tabJours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]; 
let tabMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

let maDateV1 = {
    "jour" : tabJours[2],
    "mois" : tabMois[1]
}

let maDateV2={};
maDateV2.jour=tabJours[2];
maDateV2.mois=tabMois[1];

console.log("Date 1 : "+maDateV1.jour,  numJour, maDateV1.mois, isHiver);
console.log("Date 2 : "+maDateV2.jour,  numJour, maDateV2.mois, isHiver);