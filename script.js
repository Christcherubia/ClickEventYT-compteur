const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");

// Evènement au click
// (modier le nombre de départ à chaque épisode)
let counterDef = "0";  // Compteur pour .title1 
let counterVic = 0;  // Compteur pour .title2

window.addEventListener('click', () => {
    // Pour le début commenter ces codes suivants afin que les valeurs reste à "0" !
   counterDef ++;  // Incrémentez le compteur de .title1
   counterVic ++;  // Incrémentez le compteur de .title2 

  // Mettez à jour le contenu des éléments .title1 et .title2 avec les compteurs
  title1.innerHTML = counterDef;
  title2.innerHTML = counterVic;
});