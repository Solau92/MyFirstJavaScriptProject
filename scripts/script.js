/**
 * Affiche le score de l'utilisateur
 * @param {number} score 
 * @param {number} nbMotsProposes 
 */
function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nbMotsProposes}` 
    spanScore.innerText = affichageScore
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

/**
 * 
 * @param {*} proposition 
 */
function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

/**
 * Lance le jeu 
 */
function lancerJeu() {
    let score = 0
    let i = 0
    let listePropositions = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
   
    afficherProposition(listePropositions[i])

    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)

        if (inputEcriture.value === listePropositions[i]) {
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value = ''
        if(listePropositions[i] === undefined) {
            afficherProposition("Le jeu est fini !")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listePropositions[i])
        }
    })

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for(let j = 0 ; j < listeBtnRadio.length ; j++) {
        listeBtnRadio[j].addEventListener("change", (event) => {
            console.log(event.target.value)
            if(event.target.value === "1") {
                listePropositions = listeMots
            } else {
                listePropositions = listePhrases
            }
            afficherProposition(listePropositions[i])
        })
    }

    afficherResultat(score, i)

}


