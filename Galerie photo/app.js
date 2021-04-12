//on créer une constante pour récupérer les img de l'id galery
const images = document.querySelectorAll('#galery img');

let imgActive = 0;// la première img est active
images[imgActive].classList.add('show');

//on creer une boucle for en commençant par la 2 éme img du tableau pour ne pas que la première disparaisse
for(let i = 1;i < images.length;i++){
    //on affecte de la 2eme a la dernière img la class hidden
    images[i].classList.add('hidden');
}


// creer un écouteur d'evenement pour le boutton suivant
document.querySelector('#next').addEventListener('click', function(){
    next();
});


//fonction pour photo suivante
const next = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive += 1;
    if(imgActive >= images.length){
        imgActive = 0;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){// pour que l'img réaparesse doucement
        images[imgActive].classList.add('show');
    }, 300);
    
}

// creer un écouteur d'évenement pour le boutton précédent
document.querySelector('#prev').addEventListener('click', function(){
    prev();
});

//fonction pour photo précédente
const prev = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive -= 1;
    if(imgActive < 0){
        imgActive = images.length - 1;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){// pour que l'img réaparesse doucement
        images[imgActive].classList.add('show');
    }, 300);
    
};

//variable globale pour stocker l'interval de temps
let interval;
// creer un écouteur d'evenement pour le boutton lecture
document.querySelector('#play').addEventListener('click', function(){
    //création de l'interval de temps
 interval = setInterval(next, 2000);
});

// creer un écouteur d'evenement pour le boutton stop
document.querySelector('#pause').addEventListener('click', function(){
    //destruction de l'interval de temps
    clearInterval(interval);
});

