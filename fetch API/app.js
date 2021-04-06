document.querySelector('#cp').addEventListener('input', function () {
    if (this.value.length == 5) {//si la longueur est = 5 caractères
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

        fetch(url).then(Response => Response.json().then(data => console.log(data))
        );
    }
});