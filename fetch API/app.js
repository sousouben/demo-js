document.querySelector('#cp').addEventListener('input', function () {
    if (this.value.length == 5) {//si la longueur est = 5 caractères
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

        fetch(url)
        .then((Response) =>//formater la reponce
            Response.json()
            .then((data) => {//traiter les données
                //console.log(data); pour avoir la liste des tableaux
                let affichage = '<ul>';
                for (let ville of data) {
                    affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants</li>`;
                }
                affichage += '</ul>';
                document.querySelector('#villes').innerHTML = affichage;
            })
        )
        .catch((err) => console.log('erreur:'+ err));// au cas ou l'appel à l'url ne fonctionne pas
    }
});