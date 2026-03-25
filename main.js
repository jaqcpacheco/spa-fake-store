import { renderHeader } from "./components/Header.js";
import { router } from "./utils/router.js";

const app = document.getElementById("app");

function renderApp() {
  app.innerHTML = `
    ${renderHeader()}
    <main id="content"></main>
  `;

  router(); 
}

renderApp();