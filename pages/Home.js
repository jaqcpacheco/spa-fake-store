import { getProducts } from "../services/api.js";
import { Card, setupCardEvents } from "../components/Card.js";
import { Loader } from "../components/Loader.js";

export async function renderHome(container) {
  container.innerHTML = Loader();

  try {
    const products = await getProducts();

    container.innerHTML = `
      <input type="text" id="search" placeholder="Buscar produto..." />
      <div class="grid">
        ${products.map(p => Card(p)).join("")}
      </div>
    `;

    setupCardEvents(products);

    document.getElementById("search").addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();

      const filtered = products.filter(p =>
        p.title.toLowerCase().includes(value)
      );

      container.querySelector(".grid").innerHTML =
        filtered.map(p => Card(p)).join("");

      setupCardEvents(filtered);
    });

  } catch (error) {
    console.error("Erro ao carregar produtos:", error);

    container.innerHTML = `
      <p style="text-align:center; margin-top:50px;">
        ❌ Erro ao carregar produtos
      </p>
    `;
  }
}