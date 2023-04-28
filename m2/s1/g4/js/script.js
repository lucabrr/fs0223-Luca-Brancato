let navBar = document.querySelector("nav")
let button = document.querySelector("nav button")
console.log(button);

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      navBar.classList.add("animated")
      button.classList.add("buttonAnimation")
    } else if(document.documentElement.scrollTop < 400){
        navBar.classList.remove("animated")
        button.classList.remove("buttonAnimation");}
        // else if(document.documentElement.scrollTop < 400 && "animated" in navBar.classList == false){
        //     navBar.classList.add("animated2")
        // }
        console.log(navBar.classList.value == "animated") ;
  });