//Declaration
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
// calcul du sous-total
let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal.toFixed(2), "MAD");

//Calcul de la réduction
let reduction = ( (codePromo ?? true) && estMembre ) ? sousTotal * reductionPourcentage / 100 : 0;
console.log("Montant de la réduction :", reduction.toFixed(3), "MAD");

//Calcul du total final
let totalFinal = sousTotal - reduction;
console.log("Total final :", totalFinal.toFixed(3), "MAD");

//Vérifier paiement 
let paiementAccepte = soldeCompte >= totalFinal;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

//Si paiement accepté, calculer le nouveau solde
let nouveauSolde = paiementAccepte ? soldeCompte - totalFinal : soldeCompte;
if (paiementAccepte) console.log("Nouveau solde :", nouveauSolde.toFixed(3), "MAD");

//Récapitulatif final
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix.toFixed(2), "MAD");
console.log("Sous-total:", sousTotal.toFixed(2), "MAD");
console.log("Réduction :", reduction.toFixed(3), "MAD");
console.log("Total     :", totalFinal.toFixed(3), "MAD");
console.log("Statut    :", paiementAccepte ? "Paiement accepté" : "Solde insuffisant");
console.log("Solde     :", nouveauSolde.toFixed(3), "MAD");
console.log("=========================");
