/***USERS.JS ******/

//création de la promesse pour le fichier USERS.JS
const promiseGetUsers = new Promise(function(resolve, reject){
    if(typeof USERS !== 'undefined'){
        resolve(USERS);
    }else{
        reject('accés aus users impossible');
    }
});

// récupérer l'etat de la promesse

promiseGetUsers.then(function(u){
    let liste = '<ul>';//creer une liste à puce
    for( let user of u){//tableau u qui contient tout les utilisateurs
        liste += `<li>${user.name}</li>`;//${nom de la variable}
        }
        liste += '</ul>';//fermeture du ul
        document.querySelector('#users').innerHTML = liste;// séléctionner la <div id=users>
        })
.catch(function(e){
    console.log(e);
});

/***NEWS.JS ******///création de la promesse pour le fichier USERS.JS

const promiseGetNews = new Promise(function(resolve, reject){
    if(typeof NEWS !== 'undefined'){
        resolve(NEWS);
    }else{
        reject('accés au news impossible');
    }
});

// récupérer l'etat de la promesse

promiseGetNews.then(function(n){
    let liste = '<ul>';//creer une liste à puce
    for( let actu of n){//tableau n qui contient tout les actualités
        liste += `<li>${actu.title}</li>`;//${nom de la variable}
        }
        liste += '</ul>';//fermeture du ul
        document.querySelector('#news').innerHTML = liste;// séléctionner la <div id=news>
        })
.catch(function(e){
    console.log(e);
});