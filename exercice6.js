//Declaration des variables
let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = { nom, age, ville, score, actif };

    //Partie A
console.log("Partie A — opérateur ??");
for (let cle in variables) {
    let valeur = variables[cle]
    console.log(cle + " ?? \"valeur par défaut\" ->", valeur ?? "valeur par défaut")
}
    //Partie B
console.log("\nPartie B — opérateur ||");
for (let cle in variables) {
    let valeur = variables[cle]
    console.log(cle + " || \"valeur par défaut\" ->", valeur || "valeur par défaut")
}
//Partie C 
console.log("\nPartie C — comparaison");
for (let cle in variables) {
    let valeur = variables[cle]

    let r1 = valeur ?? "valeur par défaut"
    let r2 = valeur || "valeur par défaut"

    if (r1 === r2) {
        console.log(cle + " : ?? et || -> même résultat")
    } else {
        console.log(cle + " : ?? et || -> résultat différent")
    }
}