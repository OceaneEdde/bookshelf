document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ajouterLivreForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const titre = document.getElementById('titre').value;
        const auteur = document.getElementById('auteur').value;
        const annee = document.getElementById('annee').value;

        // Appel à l'API Google Images pour récupérer l'URL de l'image du livre
        fetch(`https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CX&q=${titre}+${auteur}+${annee}+book+cover&searchType=image`)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.items[0].link; // Récupérer l'URL de la première image de résultats
                afficherImageLivre(imageUrl);
            })
            .catch(error => console.error('Erreur lors de la récupération de l\'image :', error));
    });

    function afficherImageLivre(imageUrl) {
        const imageLivre = document.createElement('img');
        imageLivre.src = imageUrl;
        imageLivre.alt = 'Couverture du livre';

        const contenuBibliotheque = document.getElementById('contenuBibliotheque');
        contenuBibliotheque.appendChild(imageLivre);
    }
});
