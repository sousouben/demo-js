const horlogerie = function(){

let date = new Date(); // pour récupérer une date qui est une fonction auomatique de js
let heures = date.getHours();
let minutes = date.getMinutes();
let secondes = date.getSeconds();

// pour afficher les chiffre inférieur a 10 avec un 0 devant:

if(secondes < 10){
    secondes = "0" + secondes;
}
if(minutes < 10){
    minutes = "0" + minutes;
}

//création d'une variable heures+minutes+secondes
let affichage = heures + ':' + minutes + ':' + secondes;

// on va chercher la div où l'on veut mettre la variable et on l'affiche en text avec innerText
document.querySelector("#horloge").innerText = affichage;
};

window.setInterval(horlogerie, 1000); // on prend la constante et on lui dit de s'afficher toute les 1 secondes
