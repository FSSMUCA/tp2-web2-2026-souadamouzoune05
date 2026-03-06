//Déclaration des paires
let paires = [[0, ""], [0, "0"], [0, false], ["", false], [null, undefined], [null, false], [NaN, NaN], [1, "1"], [" \t\n ", 0]];

// Comptage des différences
let compteur = 0;

for (let i = 0; i < paires.length; i++) {

    let a = paires[i][0];
    let b = paires[i][1];

    let egal = (a == b);
    let strict = (a === b);

    let aAff = JSON.stringify(a);
    let bAff = JSON.stringify(b);

    if (a !== a) aAff = "NaN";
    if (b !== b) bAff = "NaN";

    let gauche = (aAff + " == " + bAff).padEnd(20);
    let droite = (aAff + " === " + bAff).padEnd(20);

    console.log(gauche + " -> " + egal + "    |   " + droite + " -> " + strict);

    if (egal && !strict) {
        compteur++;
    }
}
console.log("----------------------------------------------------");
console.log(compteur + " paire(s) où == et === donnent des résultats différents");