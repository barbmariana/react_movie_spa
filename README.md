# Movie Time
A single-page application (SPA) built with **React** and **JavaScript**, styled with **CSS**. Movie Time lets users browse, search, and explore movies, view details, and manage personal lists.

## Demo
![Captura de tela 2024-08-19 091919](https://github.com/user-attachments/assets/2472da74-a789-4b77-abb4-55023d5715b8)

## Features
- 🔎 **Search** movies by title and filter by genre/year/rating
- 🎬 **Movie details** page with cast, runtime, synopsis, trailers
- ⭐ **User lists**: favorites/watchlist (local storage by default)
- 📱 **Responsive** UI (mobile-first)
- ⚡ **Client-side routing** with lazy-loaded routes
- 🔍 **Debounced search** input to reduce API calls
- ♿ **Accessible** components with keyboard navigation and ARIA labels

## Tech Stack
- **React** (SPA)
- **JavaScript (ES2020+)**
- **CSS** (modules or global styles; optional utility classes)
- **Vite** or **Create React App** (choose one; Vite recommended)
- **React Router** for routing
- **Jest** + **React Testing Library** for tests (optional)
- **ESLint** + **Prettier** for code quality (optional)

## Architecture
- **Feature-first** folder structure (components grouped by feature)
- **Hooks** for data fetching and UI logic separation (`useMovies`, `useDebounce`, etc.)
- **Services** layer for API calls (`/src/services/api.js`)
- **Presentational vs. container** components when useful

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9 (or yarn/pnpm)

### Installation
```bash
# clone the repository
git clone https://github.com/your-org/movie-time.git
cd movie-time

# install dependencies
npm install
# or
yarn install
