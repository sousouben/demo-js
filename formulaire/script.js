let form = document.querySelector('#loginForm');//la variable from va attraper l'id loginForm

console.log(form.email);

//ecouter la modification de l'email
form.email.addEventListener('change', function(){
    validEmail(this);
});

//ecouter la modification du mot de passe
form.password.addEventListener('change', function(){
    validPassword(this);
});

//ecouter la soumission du formulaire'
form.addEventListener('submit', function(e){
    e.preventDefault();//pour ne pas envoyer les données
    if(validEmail(form.email) && validPassword(form.password)){
        form.submit();// si c'est valide on envoi le formulaire
    }
});

// validation email***********************************

const validEmail=function(inputEmail){
    //création de la regExp pour la validation d'email
    let emailRegExp= new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    //^ signifi le début du texte on a le droit au lettre minucule de a-z et majuscule de A-Z 
    //puis les chiffres 0 à 9 puis les caractére speciaux. pour le début de l'adresse mail.[a-zA-Z0-9.-_]+
    //[@]{1} on doit retrouver le @ une suel fois.
    //[a-zA-Z0-9.-_]+ meme chose comme pour le début du mail
    //[.]{1} un seul .
    //[a-z]{2,10} la fin de l'adresse mail est en minuscule et peut avoir de 2 à 10 lettres.
    //$ signifie la fin de mon adresse mail.
    //g est un marqueur.

    // récupréation balise small
    let small= inputEmail.nextElementSibling;

    //on test l'expression régulière
    if(emailRegExp.test(inputEmail.value)){
        small.innerHTML='Adresse valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
            }
            else{
                small.innerHTML='Adresse invalide';
                small.classList.remove('text-success');
                small.classList.add('text-danger');
                return false;
            }
     
}

// validation mot de passe***********************************

const validPassword=function(inputPassword){
    let msg;//message a afficher dans le small du mot de passe
    let valid = false;
    //au moins 3 caractères 
    if(inputPassword.value.length < 3){
        msg= 'le mot de passe doit contenir au moins 3 caractères';
            }

    //au moins 1 maj
    else if(!/[A-Z]/.test(inputPassword.value)){//! veux dire faux
        msg= 'le mot de passe doit contenir au moins 1 majuscule';
    }
    //au moins 1 min
    else if(!/[a-z]/.test(inputPassword.value)){//! veux dire faux
        msg= 'le mot de passe doit contenir au moins 1 minuscule';
    }
    //au moins 1 chiffre
    else if(!/[0-9]/.test(inputPassword.value)){//! veux dire faux
        msg= 'le mot de passe doit contenir au moins 1 chiffre';
    }
    //mot de passe valide
    else{
        msg= 'le mot de passe est valide';
        valid= true;//lorsque tous les tests sont passé la variable devient vrai
    }
    //affichage
    // récupréation balise small
    let small= inputPassword.nextElementSibling;

    //on test l'expression régulière
    if(valid){
        small.innerHTML='Mot de passe valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
            }
            else{
                small.innerHTML=msg;
                small.classList.remove('text-success');
                small.classList.add('text-danger');
                return false;
            }
}