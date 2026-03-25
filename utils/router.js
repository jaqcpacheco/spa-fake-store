import { renderHome } from "../pages/Home.js";
import { renderFavorites } from "../pages/Favorites.js";

export function router() {
  const content = document.getElementById("content");

  function navigate() {
    const hash = window.location.hash;

    console.log("ROTA:", hash); 

    if (hash === "#favorites") {
      renderFavorites(content);
    } else {
      renderHome(content);
    }
  }

  
  window.addEventListener("hashchange", navigate);

  
  navigate();
}