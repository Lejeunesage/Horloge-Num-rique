let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');

affichageHeure = () => {
    // Déclaration des variable qui sont utilisées!
    let today, annee , listeMois, mois, listeJours, joursNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    // Récupérer la date actuelle;
    today = new Date();

    // Récupérer l'année:
    annee = today.getFullYear();

    // Récupérer le mois:
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", " Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    mois = listeMois[today.getMonth()];

    // Récupérer le numéro du jours du mois;
    joursNumero = today.getDay()

    

    // Récupérer le jours? Attention le jours commence par Dimanche.

    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    jourNom = listeJours[joursNumero];

    // Afficher les heurees minites et secondes toujours avec deux Chiffres.

    deuxChiffres = function(element){
        if (element < 10) {
            return element = '0' + element;
        }else{
            return element;
        };
    }

    // Réupérer les heures:
    heures = deuxChiffres(today.getHours());

    // Réupérer les minutes:
    minutes = deuxChiffres(today.getMinutes());

    // Réupérer les secondes:
    secondes = deuxChiffres(today.getSeconds());

    // Affichage dans nos Div du Html;
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes ;

    dateDiv.textContent = jourNom + ", " + joursNumero + " " + " " + mois + " " + annee


    setInterval(affichageHeure, 1000);

}

affichageHeure();


