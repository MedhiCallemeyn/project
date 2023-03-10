// selection du h3
const counterDisplay = document.querySelector("h3");
// creation d'un compteur
let counter = 0;




//fonction de creation de bulles
const bubbleMaker = () =>{
// creation d'un span pour = futur bulle 
const bubble = document.createElement('span');
// ajout de la classe css bubble 
bubble.classList.add("bubble");
// injection de notre span munie de sa classe css entant qu'enfant du body
document.body.appendChild(bubble);

//definir un chiffre aleatoire entre 100 et 300
const size = Math.random() * 200 + 100 + "px";
// injection de ce chiffre aleatoire pour definir la hauteur et la largeur d'une bulle
bubble.style.height = size ;
bubble.style.width = size ;

// injection d'un chiffre aleatoire pour definir la position de la bulle 
bubble.style.top = Math.random() * 100 + 50 + "%";
bubble.style.left = Math.random()  * 100 + "%";

//injection d'un left sur l'animation via setProprety 
const plusMinus = Math.random() > 0.5 ? 1 : -1;
bubble.style.setProperty('--left',Math.random() * 100  * plusMinus + "%");

// ajout d'un eventlistener pour faire disparaitre les bulles quand on click dessus
bubble.addEventListener("click",()=>{
  counter ++;
  bubble.remove()
  counterDisplay.textContent = counter;
})

// dispartion des bulles apres 8 secondes
setTimeOut(()=>{
  bubble.remove();
},8000)
}

// lancement de la fonction a l'infini
setInterval(bubbleMaker,300);