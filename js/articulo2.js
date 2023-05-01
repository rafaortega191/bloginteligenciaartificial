
/*function sponsor() {
   document.write("COMPRA GAMER");
}
setTimeout(sponsor, 4000);*/


  function mostrarPublicidad() {
    
    let divPublicidad = document.getElementById("publicidad");
    
    
    let imagenPublicidad = document.createElement("img");
    imagenPublicidad.src = "ruta/a/la/imagen/del/sponsor.jpg";
    
    
    let enlacePublicidad = document.createElement("a");
    enlacePublicidad.href = "https://www.sponsor.com";
    
   
    enlacePublicidad.appendChild(imagenPublicidad);
    
    
    divPublicidad.appendChild(enlacePublicidad);
  }
  
  setTimeout(mostrarPublicidad, 4000);
