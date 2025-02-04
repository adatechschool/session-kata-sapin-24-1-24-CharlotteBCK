// Comme d'habitude, je n'ai quasiment pas lu les consignes, donc je pensais qu'il fallait faire l'étape 1 d'un seul coup.
// Ça a été très difficile, mais par miracle, j'ai trouvé une méthode.

function afficherPointeSapin(hauteur) {

  for (let i = 0; i < hauteur; i++) {
    let espaces = ' '.repeat(hauteur-i) 
    let branche = '/'  + '*'.repeat(i)+ '|' + '*'.repeat(i) 
    console.log(espaces + branche);
  }
 
}
afficherPointeSapin(4);


// Impossible de mettre "\" 

// "Ensuite, à 11h45, j'ai ENFIN lu les consignes et je me suis rendu compte que je ne les avais pas respectées AHAHA (en vrai, je n'ai pas rigolé)
// Donc, voici ce que j'ai essayé de produire :" 


function afficherEtoiles(num) {
let etoile = "";
for (let i = 0; i < num; i++) {
  etoile += "*";
}
return etoile;
}

function afficherRectangle(hauteur, largeur) {

for (let i = 0; i < largeur, i < hauteur; i++) {
  hauteur[i]++
  largeur += afficherEtoiles([i])
}

return hauteur, largeur;
}

console.log(afficherRectangle(5, 5));


// Je n'ai donc pas eu le temps de terminer cette étape. Voilà comment passer à côté de son kata.

