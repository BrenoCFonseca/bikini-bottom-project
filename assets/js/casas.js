function clicou() {
    const casaPat = document.querySelector(".patrick")
    const casaLula = document.querySelector(".lula")
    const casaBob = document.querySelector(".bob")     
    const patrickAreadeClick = document.querySelector(".patrick-casa")
    const lulaAreadeClick = document.querySelector(".lula-casa")
    const bobAreadeClick = document.querySelector(".bob-casa")



    patrickAreadeClick.addEventListener("click", () => {casaPat.classList.toggle("patrick-show")});

    lulaAreadeClick.addEventListener("click", () => {casaLula.classList.toggle("lula-show")});

    bobAreadeClick.addEventListener("click", () => {casaBob.classList.toggle("bob-show")});



    // window.addEventListener("click", function(e) {
    //     el = e.target
    //     if (el.classList.contains("patrick-casa")) {
            
    //     };

    //     if (el.classList.contains("lula-casa")) {
    //         casaLula.style.display = "flex";
    //     };

    //     if (el.classList.contains("bob-casa")) {
    //         console.log("clicou");
    //         casaBob.style.display = "flex";
    //     };
    //  });
  
}

clicou()