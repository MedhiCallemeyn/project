// Créer un événement au scroll
// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut


window.addEventListener("scroll",()=>{
  if(window.scrollY > 0){
  navbar.style.height = "50px";
  }else{
    navbar.style.height = "90px";
  }
  // stockage de l'operation pour avoir la valeur(entre 0 et 1 ) de scroll quelque soit l'ecran
  let scrollValue = (window.scrollY + window.innerHeight)/ document.body.offsetHeight;
console.log(scrollValue);
  
    // Faire apparaitre l'image de la partie improvise  
  if(scrollValue  >= 0.50){
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform ="translateX(0px)";
  }else{
    imgImprovise.style.opacity = 0;
    imgImprovise.style.transform ="translateX(-200px)";
  }
  // Faire apparaitre la popup quand on est en bas du site
  if(scrollValue >= 0.85 ){
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";
    }else{
      popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
    }
})

// Bonus : quand on clicke sur la popup elle disparait pour toujours
closeBtn.addEventListener("click",()=>{
  popup.style.display = "none";
})

