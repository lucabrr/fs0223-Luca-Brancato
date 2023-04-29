let navBar = document.querySelector("nav")
let button = document.querySelector("nav button")


window.addEventListener("scroll", () => {
    if (window.scrollY> 400) {
      navBar.classList.remove("animated2")
      button.classList.remove("buttonAnimation2")
      navBar.classList.add("animated")
      button.classList.add("buttonAnimation")
      
      
    } else if(window.scrollY < 400 && navBar.classList == "animated" ){
        navBar.classList.remove("animated")
        button.classList.remove("buttonAnimation");
        navBar.classList.add("animated2")
        button.classList.add("buttonAnimation2")
      }
       
        
  });