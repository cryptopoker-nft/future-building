export function darkToggleEnable() {
    // target the DOM root
    let root = document.querySelector(":root");
    let toggleBtn = document.querySelector(".darkToggle");
  
    console.log("Dark Mode Toggle");
    root.classList.toggle("dark");
  
    //logos and artwork
  
    let mainLogo = document.querySelector(".mainLogo");
    let darkLogo = document.querySelector(".darkLogo");
    let hero = document.querySelector(".hero");
    let bottomGfx = document.querySelector(".bottom");
  
  
    console.log(mainLogo);
    if(root.classList.contains("dark")){
      // we are changing to dark
      mainLogo.style.display = "none";
      darkLogo.style.display = "inline";
  
      toggleBtn.src = "./src/assets/darkbg-btn.png";
      hero.src = "./src/assets/hero-dark.png";
      bottomGfx.src = "./src/assets/bottom-dark.png";
  
    } else {
      // we are changing to light
      mainLogo.style.display = "inline";
      darkLogo.style.display = "none";
  
      toggleBtn.src = "./src/assets/lightbg-btn.png";
      hero.src = "./src/assets/hero-light.png";
      bottomGfx.src = "./src/assets/bottom-light.png";
      
    }
  
  }