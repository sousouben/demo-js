//Fonctions Constructeurs

function Ours(nameOurs,ageOurs,colorOurs){
    this.name=nameOurs;
    this.age=ageOurs;
    this.color=colorOurs;
    this.mange= function(){
        console.log('ours mechant ' + this.name)
    }
}

var petitOurs= new Ours('doudou', 4, 'black');
var grandOurs= new Ours('bibiche',12 , 'vert');

console.log(petitOurs);//Ours {name: "doudou", age: 4, color: "black"}

//on creer une fonction puis on creer une variable qui va utiliser la fonction

console.log(grandOurs);//Ours {name: "bibiche", age: 12, color: "vert"}

petitOurs.mange();//ours mechant doudou
grandOurs.mange();//