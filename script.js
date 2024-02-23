const bibliotheque = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943 },
    { titre: "Harry Potter à l'école des sorciers", auteur: "J.K. Rowling", annee: 1997 },
    { titre: "1984", auteur: "George Orwell", annee: 1949 },
];

function afficherBibliotheque() {
    const bibliothequeElement = document.getElementById("bibliotheque");

    bibliothequeElement.innerHTML = "";

   
    bibliotheque.forEach(livre => {
        const livreElement = document.createElement("div");
        livreElement.classList.add("livre");
        livreElement.innerHTML = `
            <h2>${livre.titre}</h2>
            <p>Auteur: ${livre.auteur}</p>
            <p>Année de publication: ${livre.annee}</p>
        `;
        bibliothequeElement.appendChild(livreElement);
    });
}


window.onload = afficherBibliotheque;