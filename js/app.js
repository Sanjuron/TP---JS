let norrisFacts = [
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Google, c'est le seul endroit où tu peux taper Chuck Norris..",
    "Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris",
    "Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.",
    "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.",
    "Chuck Norris ne se mouille pas, c'est l'eau qui se Chuck Norris.",
    "Chuck Norris peut gagner une partie de puissance 4 en trois coups.",
    "Jesus Christ est né en 1940 avant Chuck Norris.",
    "Chuck Norris ne porte pas de montre. Il décide de l'heure qu'il est.",
    "La seule chose qui arrive à la cheville de Chuck Norris... c'est sa chaussette.",
    "Chuck Norris fait pleurer les oignons.",
    "Chuck Norris peut diviser par zéro.",
    "Chuck Norris comprend Jean-Claude Van Damme.",
];

console.log(norrisFacts);

function randFacts(){
    let rand = Math.floor(Math.random() * norrisFacts.length) // génère nombre aléatoire qui prend l'entièreté du tableau
    document.getElementById("quote").innerHTML = norrisFacts[rand]; // assigne les citations aléatoires dans p
}

console.log(randFacts());

function randColor(){
    let color = '#'+Math.random().toString(16).substr(-6);
    ; // génère couleur aléatoire.
    let body = document.getElementById("body");
    let button = document.getElementById("button");
    let quote = document.getElementById("quote");
    body.style.backgroundColor = color;
    button.style.backgroundColor = color;
    quote.style.color = color;

} // ça ne marche pas

let button = document.getElementById("button"); 
button.addEventListener("click", randFacts, randColor); // ! ne surtout pas oublier les parenthèses autour de click! Et ne pas en mettre après la fonction!!




