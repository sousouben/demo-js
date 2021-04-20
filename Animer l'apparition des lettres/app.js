const target = document.getElementById("target");
let array = ['simple','clear','smart','strong'];
let wordIndex = 0;//ciblé le mot dans le tableau
let letterIndex = 0;//ciblé la lettre dans le tableau

const createLatter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.classList.add('letter');
    //letter.style.opacity = 0;
    letter.style.animation = 'anim 5s ease forwards';
    letter.textContent = array[wordIndex][letterIndex];
}
createLatter();
