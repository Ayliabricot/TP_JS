let age;

age = prompt('Quel est ton âge ?');


if(age==18){
    alert("L'utilisateur vient d'être majeur");
}

else if(age==25){
    alert("L'utilisateur a un quart de siècle");
}

else if(age==50){
    alert("L'utilisateur a un demi siècle");
}

else if(age==100){
    alert("L'utilisateur vient d'être centenaire");
}

else if (0<=age && age<18){
    alert("L'utilisateur a "+age+" an(s), il est mineur!");
}

else if(0<=age && age<62){
    alert("L'utilisateur a "+age+" ans, il est majeur!");
}
else if(age>62){
    alert("L'utilisateur a "+age+" ans, il est majeur mais aussi retraité!");
}
else{
    alert("Rentre un âge valide non mais yagoulou");
}