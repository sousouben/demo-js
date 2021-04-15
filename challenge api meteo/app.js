const APIKEY = 'ed6c95c5bb1e05d81f7185548cb7c201';

let apiCall = function (city) {

    //création d'une API pour chaque ville
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    //récupération de l'API
    fetch(url).then((Response) => Response.json()
        .then((data) => {
            console.log(data);
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = '<i class="fas fa-thermometer-half"></i>' + data.main.temp + '°';
            document.querySelector('#humidity').innerHTML = '<i class="fas fa-tint"></i>' + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = '<i class="fas fa-wind"></i>' + data.wind.speed + 'km/h';
        })
    )
        .catch((err) => console.log('Erreur :' + err));//avec la methode then on peut mettre un catch erreur
};

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

//appel par defaut lorsqu'on est dans la page
apiCall('Dreux');
