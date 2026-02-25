let li = document.querySelector("#listeCourses li");
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR');
let h2 = document.querySelector("h2");

let myInput=document.querySelector("#myInput");;
let btn=document.querySelector(".btn");;
let liste=document.querySelector("ul");


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
    let value=myInput.value;
    if (!value){
        alert("Erreur de saisie");
    }
    else{
        alert("Produit ajouté");
        let newLi = document.createElement("li");
        newLi.textContent = value;
        newLi.addEventListener('click', ()=>{
            newLi.classList.toggle("itemCheck");
        })
        liste.appendChild(newLi);
        myInput.value="";
    }
}