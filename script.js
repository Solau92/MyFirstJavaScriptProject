const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie est belle", "Merci beaucoup !"]
let score = 0

let choixUtilisateur = prompt("Choisir mots ou phrases")

while(choixUtilisateur != "mots" && choixUtilisateur != "phrases") {
    choixUtilisateur = prompt("Erreur, veuillez taper le mot \"mots\" ou le mot \"phrases\"")
}

if(choixUtilisateur === "mots") {
    for(let i = 0 ; i < listeMots.length ; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
    
        if(motUtilisateur === listeMots[i]) {
            score ++
        }
        console.log(score)
    }
} else {
    for(let i = 0 ; i < listePhrases.length ; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listePhrases[i])
    
        if(motUtilisateur === listePhrases[i]) {
            score ++
        }
        console.log(score)
    }
}

console.log("Votre score final est de " + score + " sur 3")

