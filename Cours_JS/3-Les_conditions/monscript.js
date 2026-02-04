let age;

age = prompt('Quel est ton âge ?');

if (0<=age && age<18){
    alert("L'utilisateur a "+age+" an(s), il est mineur!");
}
else if(0<=age && age<62){
    alert("L'utilisateur a "+age+" ans, il est majeur!");
}
else if(age>=62){
    alert("L'utilisateur a "+age+" ans, il est majeur mais aussi retraité!");
}
else{
    alert("Rentre un âge valide non mais yagoulou");
}