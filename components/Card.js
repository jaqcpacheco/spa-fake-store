import { toggleFavorite, getFavorites } from "../utils/storage.js";

export function Card(product) {
  const favorites = getFavorites();
  const isFav = favorites.some(p => p.id === product.id);

  return `
    <div class="card">
      <div class="img-container">
        <img src="${product.image}" />
      </div>

      <h3>${product.title}</h3>

      <span class="category">${product.category || "Categoria"}</span>

      <p class="price">R$ ${product.price}</p>

      <button data-id="${product.id}" class="fav-btn">
        ${isFav ? "❤️" : "🤍"}
      </button>
    </div>
  `;
}

export function setupCardEvents(products) {
  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const product = products.find(p => p.id === id);

      toggleFavorite(product);
      location.reload(); 
    });
  });
}