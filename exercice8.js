let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

//Traitement du nom
let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu"

//Traitement de l'âge
let ageNombre = parseInt(age);
let ageValide = (!isNaN(ageNombre) && ageNombre > 0) ? ageNombre : "valeur invalide";

//Traitement de l'email
let emailValide = (email.includes("@") && email.indexOf(".") > email.indexOf("@")) ? "valide" : "invalide";

//Traitement du scoreJeu
let score = parseInt(scoreJeu);
if (isNaN(score)) score = 0

//Traitement estAdmin (conversion manuelle)
let admin = (estAdmin === "true") ? true : false;

//Traitement derniereConnexion avec ?? pour valeur par défaut
let derniere = derniereConnexion ?? "Jamais connecté";

//Traitement nombreConnexions
let nbConnexions = parseInt(nombreConnexions);
let nbConnexionsAff = (nbConnexions === 0) ? "Aucune connexion" : nbConnexions;

//Affichage du rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log("age              :", ageValide, (typeof ageValide === "number" ? "(valide)" : "(valeur invalide)"));
console.log('email            : "' + email + '" (' + (emailValide === "valide" ? "valide" : "invalide : pas de point après @") + ')');
console.log("scoreJeu         :", score, '(extrait depuis "' + scoreJeu + '")');
console.log("estAdmin         :", admin, "(attention : Boolean(\"false\") = true, conversion manuelle requise)");
console.log('derniereConnexion: "' + derniere + '" (valeur par défaut via ??)');
console.log("nombreConnexions :", nbConnexionsAff, "(0 après conversion)");
console.log("================================");