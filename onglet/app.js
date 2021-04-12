let titles = document.querySelectorAll('#tabs .tab-titles li');

for(let title of titles){
    title.addEventListener('click', function(){
        //on récupére le numéro du titre
        let num = this.getAttribute('data-tabtitle');
        //on récupére la div active et on masque la class active
        document.querySelector('#tabs > div.active').classList.remove('active');
        //on réactive la div voulu en récurérant l'id et on ajoute la class active
        document.querySelector('#tab' + num).classList.add('active');
        //on enlève la class du titre pécédement actif
        document.querySelector('#tabs .tab-titles li.active').classList.remove('active');
        //on active le bon titre
        this.classList.add('active');
    });
}