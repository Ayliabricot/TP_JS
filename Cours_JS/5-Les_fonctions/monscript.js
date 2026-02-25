function calculAge(annee){
    let date=new Date().getUTCFullYear();
    return date-annee;
}

let annee=parseInt(prompt("Veuillez saisir votre année de naissance"));
let age=calculAge(annee);
alert("Vous avez "+age+" ans");