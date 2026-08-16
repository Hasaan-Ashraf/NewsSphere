# 📰 NewsSphere — News Rendering Application

A modern and responsive **News Rendering Application** built with **React.js, Vite, Bootstrap, CSS, and NewsAPI**.

NewsSphere allows users to discover the latest news, search for specific topics, browse news articles through an interactive interface, and open complete articles from their original sources.

The project started as a basic JavaScript and Bootstrap news application and was redesigned into a modern React-based application with professional UI, responsive layouts, animated news cards, loading states, search functionality, and reusable components.

---

## 📸 Project Overview

NewsSphere provides a clean and modern interface for discovering news articles from different topics.

### Main Features

- 🔎 Search for news by keyword
- 📰 Display latest news articles
- 🌐 Fetch real-time news using NewsAPI
- 🖼️ Display article images
- 📖 Read full articles from original sources
- 🎨 Professional modern UI
- 📱 Fully responsive design
- ✨ Animated and interactive news cards
- ⚡ Fast React + Vite development environment
- 🔄 Loading states while fetching news
- ❌ Error handling for failed API requests
- 🧩 Reusable React components
- 🎯 Category-based news browsing
- 🌙 Modern dark-themed interface

---

# 🚀 Technologies Used

## Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap
- React Icons

## Development Tools

- Vite
- ESLint
- npm
- Visual Studio Code

## API

- NewsAPI

---

# 🏗️ Project Architecture

The application follows a component-based React architecture.

```text
NewsSphere/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryBar.jsx
│   │   ├── NewsCard.jsx
│   │   ├── NewsGrid.jsx
│   │   └── LoadingCard.jsx
│   │
│   ├── services/
│   │   └── newsApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
