async function loadData(num){
    let ok="Ok";
    let main=document.querySelector("main");

    let lien="https://pokebuildapi.fr/api/v1/pokemon/generation/"+num;
    const data = await fetch(lien)
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
                article.style.backgroundColor = "#74BE3D";
                article.style.borderColor = "#74BE3D";
                break;
            case "Feu":
                article.style.backgroundColor = "#DA390F";
                article.style.borderColor = "#DA390F";
                break;
            case "Eau":
                article.style.backgroundColor = "#3892EC";
                article.style.borderColor = "#3892EC";
                break;
            case "Poison":
                article.style.backgroundColor ="#8D468B";
                article.style.borderColor = "#8D468B";
                break;
            case "Glace":
                article.style.backgroundColor ="#78D3F4";
                article.style.borderColor = "#78D3F4";
                break;
            case "Combat":
                article.style.backgroundColor ="#823425";
                article.style.borderColor = "#823425";
                break;
            case "Insecte":
                article.style.backgroundColor ="#A5B424";
                article.style.borderColor = "#A5B424";
                break;
            case "Sol":
                article.style.backgroundColor ="#CEB360";
                article.style.borderColor = "#CEB360";
                break;
            case "Roche":
                article.style.backgroundColor ="#B29B58";
                article.style.borderColor = "#B29B58";
                break;
            case "Électrik":
                article.style.backgroundColor ="#F8BC28";
                article.style.borderColor = "#F8BC28";
                break;
            case "Acier":
                article.style.backgroundColor ="#BCB9BD";
                article.style.borderColor = "#BCB9BD";
                break;
            case "Psy":
                article.style.backgroundColor ="#DF497B";
                article.style.borderColor = "#DF497B";
                break;
            case "Fée":
                article.style.backgroundColor ="#EFB8F0";
                article.style.borderColor = "#EFB8F0";
                break;
            case "Ténèbres":
                article.style.backgroundColor ="#513622";
                article.style.borderColor = "#513622";
                break;
            case "Normal":
                article.style.backgroundColor ="#BCB9BD";
                article.style.borderColor = "#BCB9BD";
                break;
            case "Vol":
                article.style.backgroundColor ="#99A6ED";
                article.style.borderColor = "#99A6ED";
                break;
            case "Dragon":
                article.style.backgroundColor ="#756FD3";
                article.style.borderColor = "#756FD3";
                break;
            case "Spectre":
                article.style.backgroundColor ="#5E64AB";
                article.style.borderColor = "#5E64AB";
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
}

let menu=document.querySelector("select");
let generation=1;
loadData(generation);
menu.addEventListener ('change',(event)=>{
        generation=menu.value;
        console.log(generation);
        loadData(generation);
});