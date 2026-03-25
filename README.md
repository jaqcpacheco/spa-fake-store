# 🛍️ Fake Store SPA

Aplicação web desenvolvida em **JavaScript Vanilla** que consome a Fake Store API para exibir produtos em formato de cards, permitindo favoritar itens e navegar entre páginas sem recarregar (SPA).

---

## 🚀 Funcionalidades

* 📦 Listagem de produtos via API
* ❤️ Sistema de favoritos com persistência no localStorage
* 🔍 Filtro de produtos por nome
* 🔄 Navegação SPA (sem recarregar a página)
* ⏳ Indicador de carregamento durante requisições
* 📱 Layout responsivo

---

## 🧠 Conceitos Utilizados

* JavaScript ES6 Modules
* Fetch API
* LocalStorage
* Manipulação do DOM
* SPA (Single Page Application)

---

## 📂 Estrutura do Projeto

```
/components
  Header.js
  Card.js
  Loader.js

/pages
  Home.js
  Favorites.js

/services
  api.js

/utils
  storage.js
  router.js

index.html
main.js
style.css
```

---

## ▶️ Como Executar o Projeto

### 🔹 Opção 1 (Recomendada)

1. Abra o terminal na pasta do projeto
2. Execute:

```
npx serve
```

3. Acesse no navegador:

```
http://localhost:3000
```

---

### 🔹 Opção 2 (VS Code)

1. Instale a extensão **Live Server**
2. Clique com o botão direito no `index.html`
3. Selecione **"Open with Live Server"**

---

## 🧑‍💻 Como Utilizar

### 🏠 Página de Produtos

* Ao abrir o site, todos os produtos são exibidos automaticamente
* Utilize o campo de busca para filtrar produtos pelo nome

---

### ❤️ Favoritar Produtos

* Clique no ícone de coração em qualquer produto
* O item será salvo como favorito

---

### ⭐ Página de Favoritos

* Clique em **"Favoritos"** no menu superior
* Apenas os produtos favoritados serão exibidos
* Os dados permanecem salvos mesmo após recarregar a página

---

### 🔄 Navegação SPA

* A navegação entre **Produtos** e **Favoritos** ocorre sem recarregar a página
* A troca de conteúdo é feita dinamicamente com JavaScript

---

## 🌐 API Utilizada

Fake Store API
https://fakestoreapi.com/products

---

## 📌 Observações

* O projeto não utiliza frameworks ou bibliotecas externas
* Todos os dados são consumidos dinamicamente da API
* Os favoritos são armazenados localmente no navegador

---

## 👩‍💻 Autora 
Jaqueline da Costa Pacheco

Desenvolvido por **Jaqueline Pacheco**
