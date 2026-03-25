import { getFavorites } from "../utils/storage.js";
import { Card, setupCardEvents } from "../components/Card.js";

export function renderFavorites(container) {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    container.innerHTML = "<p>Nenhum favorito</p>";
    return;
  }

  container.innerHTML = `
    <div class="grid">
      ${favorites.map(p => Card(p)).join("")}
    </div>
  `;

  setupCardEvents(favorites);
}