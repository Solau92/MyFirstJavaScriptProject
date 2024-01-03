
function afficherResultat(score, nbMots) {
    console.log("Votre score final est de " + score + " sur " + nbMots)
}

function choisirPhrasesOuMots() {
    let choixUtilisateur = prompt("Choisir mots ou phrases")
    while(choixUtilisateur != "mots" && choixUtilisateur != "phrases") {
        choixUtilisateur = prompt("Erreur, veuillez taper le mot \"mots\" ou le mot \"phrases\"")
    }
    return choixUtilisateur
}

function lancerBoucleDeJeu(listePropositions) {

    let score = 0

    for(let i = 0 ; i < listePropositions.length ; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
    
        if(motUtilisateur === listePropositions[i]) {
            score ++
        }
        console.log(score)
    }
    return score
}

function lancerJeu() {
    let choixUtilisateur = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if(choixUtilisateur === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}


