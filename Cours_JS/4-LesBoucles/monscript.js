let somme = 0;
let iterations = parseInt(prompt('Veuillez saisir un nombre entre 1 et 100 : '));
if (!(iterations>=0) || !(iterations<=100)){
    alert("La saisie n'est pas valide");
}

else{
    do{
        somme+=iterations;
        iterations--;
    }while(iterations>0);

    console.log(somme);
}