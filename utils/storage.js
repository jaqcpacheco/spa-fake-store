const KEY = "favorites";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function toggleFavorite(product) {
  let favorites = getFavorites();

  const exists = favorites.find(p => p.id === product.id);

  if (exists) {
    favorites = favorites.filter(p => p.id !== product.id);
  } else {
    favorites.push(product);
  }

  localStorage.setItem(KEY, JSON.stringify(favorites));
}