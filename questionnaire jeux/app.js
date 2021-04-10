const questions = [
    {
        question:
        'a quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
        reponse: 2
    },
    {
        question:
        "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
        reponse: 1
    },
    {
        question:
        'Quel organe est perturbé par le acouphènes ?\n1. Les pieds\n2. Les oreilles',
        reponse: 2
    }
];

/*****début du jeu*/
let nbBonneReponse = 0;

for(i = 0; i < questions.length; i++){
    let repUser = prompt(questions[i].question);// prompt va afficher une fenêtre comme les alertes
    //on va récupérer dans le tableau la valeur question
    if( repUser == questions[i].reponse){//on récupére la valeur réponse
        alert('bonne réponse');
        nbBonneReponse +=1;//pour ajouter 1 point a chaque bonne réponse
    }else{
        alert('mauvaise réponse');
    }
}
if(nbBonneReponse <= 1){
    alert(`Vous aves ${nbBonneReponse} bonne réponse sur ${questions.length}`);
}else{
    alert(`Vous aves ${nbBonneReponse} bonnes réponses sur ${questions.length}`);
}

