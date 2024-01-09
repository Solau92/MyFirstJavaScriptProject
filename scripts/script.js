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
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
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

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        email = baliseEmail.value

        let scoreEmail = `${score} / ${i}`

        afficherEmail(nom, email, scoreEmail)

        console.log(nom, email)
    })

    afficherResultat(score, i)

}


