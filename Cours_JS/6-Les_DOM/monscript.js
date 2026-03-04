let li = document.querySelector("#listeCourses li");
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR');
let h2 = document.querySelector("h2");

let myInput=document.querySelector("#myInput");;
let btn=document.querySelector(".btn");;
let liste=document.querySelector("ul");
let products = document.getElementsByTagName("li");

h2.textContent="Liste des courses : "+dateJourFr;


btn.addEventListener('click', ()=>{
  addProduct();
})

myInput.addEventListener('keydown', (event)=> {
  if (event.code === "Enter") {
    addProduct();
  }
});

function addProduct(){
    let value=myInput.value.toLowerCase();
    let length = value.length;
    if (!value){
        alert("Erreur de saisie");
    }
    else{
        let compteur=0;
        for (const product of products){
            if (product.textContent.toLowerCase().startsWith(value.toLowerCase())) {
                let end = product.textContent.slice(length);
                if (end.startsWith(" X")) {
                    compteur = parseInt(end.replace(" X", ""))+1;
                }
                else if(end === ""){
                    compteur=2;
                }
                else{
                    break;
                }
                product.textContent = value.toLowerCase()+" X"+compteur;
            }
        }
        
        if (compteur>0){
            alert("Produit identique");
            products = document.getElementsByTagName("li");
        }
        else{
            alert("Produit ajouté");
            let newLi = document.createElement("li");
            newLi.textContent = value;
            newLi.addEventListener('click', ()=>{
                newLi.classList.toggle("itemCheck");
            })
            newLi.addEventListener('dblclick', ()=>{
                liste.removeChild(newLi);
                alert("Produit supprimé");
            })
            liste.appendChild(newLi);
            products = document.getElementsByTagName("li");
        }
        myInput.value="";
    }
}