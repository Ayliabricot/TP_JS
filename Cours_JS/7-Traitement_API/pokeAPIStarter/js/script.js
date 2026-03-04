let ok="Ok";
let main=document.querySelector("main");

const data = await fetch("./data/data.json")
    .then(response => response.json())
    .catch(error => ok="Erreur : " + error);
    
alert("Les données ont bien été récupérées");

for (const pokemon of data){
    let types=""
        for (const type of pokemon.apiTypes){
            types=types+type.name+" ";
        }
    
    let article = document.createElement("article");
    switch (pokemon.apiTypes[0].name){
        case "Plante":
            article.style.backgroundColor = "green";
            article.style.borderColor = "green";
            break;
        case "Feu":
            article.style.backgroundColor = "red";
            article.style.borderColor = "red";
            break;
        case "Eau":
            article.style.backgroundColor = "blue";
            article.style.borderColor = "blue";
            break;
    }
    
    article.innerHTML=
          `<figure>
          <picture>
            <img src=${pokemon.image} />
          </picture>
          <figcaption>
          
            <span class="types">${types}</span>
            <h2>${pokemon.name}</h2>
            <ol>
              <li>Points de vie : ${pokemon.stats.HP}</li>
              <li>Attaque : ${pokemon.stats.attack}</li>
              <li>Défense : ${pokemon.stats.defense}</li>
              <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
              <li>Vitesse : ${pokemon.stats.special_defense}</li>
            </ol>
          </figcaption>
        </figure>`;
    
    main.appendChild(article);
}