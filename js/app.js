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
    "Chuck Norris joue à la roulette russe avec un chargeur plein.",
    "Chuck Norris sait parler le braille.",
    "Chuck Norris a un jour avalé un paquet entier de somnifères. Il a cligné des yeux.",
    "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.",
    "Les suisses ne sont pas neutres, ils attendent de savoir de quel coté Chuck Norris se situe.",
    "Il n'y a pas de théorie de l'évolution. Juste une liste d'espèces que Chuck Norris autorise à survivre.",
    "Chuck Norris peut encercler ses ennemis. Tout seul.",
    "Chuck Norris est la raison pour laquelle Charlie se cache.",
    "Chuck Norris a déjà été sur Mars, c'est pour cela qu'il n'y a pas de signes de vie là bas.",
    "Chuck Norris connait la dernière décimale de Pi.",
    "Si Chuck Norris avait été pris dans le film '300' il l'aurait renommé en '1'.",
    "Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.",
    "Chuck Norris n'utilise pas de suppositoire. Les voies du seigneur sont impénétrables.",
    "Chuck Norris peut t'étrangler avec un téléphone sans fil.",
    "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.",
];

console.log(norrisFacts);

function randFacts(){
    let rand = Math.floor(Math.random() * norrisFacts.length) // génère nombre aléatoire qui prend l'entièreté du tableau
    document.getElementById("quote").innerHTML = norrisFacts[rand];
    let color = getRandomColor();
    // génère couleur aléatoire.
    let body = document.getElementById("body");
    let button = document.getElementById("button");
    let quote = document.getElementById("quote");
    let CN = document.getElementById("CN");
    CN.style.color = color;
    body.style.backgroundColor = color;
    button.style.backgroundColor = color;
    quote.style.color = color;
    // associe body, quote et button à la couleur aléatoire
}

console.log(randFacts());

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 11)];
    }
    return color;
  } // fonction qui génère une couleur aléatoire



let button = document.getElementById("button"); 
button.addEventListener("click", randFacts); // ! ne surtout pas oublier les parenthèses autour de click! Et ne pas en mettre après la fonction!!



