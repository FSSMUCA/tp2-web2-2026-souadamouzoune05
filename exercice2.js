    //Déclaration de tableau
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for(let i = 0; i < valeurs.length; i++){
    let val = valeurs[i];

        // Conversion en chaine
    let strVal = String(val);
        //Remplacer la chaine vide
    if(val === ""){
        strVal = "(chaine vide)"
    }
        //tester si truthy ou falsy
    if(val) {
        console.log(strVal + " -> truthy")
    }
    else {
        console.log(strVal + " -> falsy")
    }
}
   