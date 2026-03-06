let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (let i = 0; i < nombres.length; i++) {

    let valeur = nombres[i];
    let affichage = String(valeur); 

    if (Number.isNaN(valeur)) {
        console.log(affichage + " -> INVALIDE");
    }

    else if (valeur === Infinity || valeur === -Infinity) {
        console.log(affichage + " -> INFINI");
    }

    else if (valeur === 0 && 1 / valeur === -Infinity) {
        console.log("0 -> ZERO NEGATIF");
    }

    else if (Number.isInteger(valeur) && Number.isSafeInteger(valeur)) {
        console.log(affichage + " -> ENTIER SUR");
    }
    
    else if (Number.isInteger(valeur) && !Number.isSafeInteger(valeur)) {
        console.log(affichage + " -> ENTIER HORS LIMITES");
    }

    else {
        console.log(affichage + " -> DECIMAL");
    }
}