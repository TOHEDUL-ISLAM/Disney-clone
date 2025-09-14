# Disney+ Clone

A feature-rich clone of the Disney+ streaming service built with modern web technologies. This project showcases a dynamic and responsive user interface for browsing and discovering movies and TV shows, powered by the TMDB API.

*(Note: Replace this with a screenshot of your project)*

## ✨ Features

  * **Dynamic Content:** Fetches and displays the latest and most popular movies and TV shows from the TMDB API.
  * **Genre-Based Discovery:** Browse content by specific genres, such as Action, Comedy, and Sci-Fi.
  * **Engaging UI:** A sleek and modern user interface inspired by Disney+, with a responsive design that looks great on all devices.
  * **Interactive Carousel:** A beautiful and interactive slider to showcase featured content.
  * **Movie Cards:** Clean and informative cards for each movie, displaying the title and poster.

## 🛠️ Technologies Used

  * **Front-End:**
      * [React](https://reactjs.org/)
      * [Vite](https://vitejs.dev/)
      * [Tailwind CSS](https://tailwindcss.com/)
  * **API:**
      * [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)
  * **Linting:**
      * [ESLint](https://eslint.org/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/TOHEDUL-ISLAM/Disney-clone.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Disney-clone
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Create a `.env` file** in the root of your project and add your TMDB API key:
    ```
    VITE_APP_API_KEY=your_tmdb_api_key_here
    ```

### Running the Application

Start the development server with this command:

```sh
npm run dev
```

Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

## 📂 Project Structure

Here is an overview of the project's file and folder structure.

```
.
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets
    │   ├── images
    │   │   └── logo
    │   │       └── logo.jsx
    │   ├── videos
    │   │   └── ...
    │   └── react.svg
    ├── components
    │   ├── GenreMovieList.jsx
    │   ├── Header.jsx
    │   ├── HeaderItem.jsx
    │   ├── HrMovieCard.jsx
    │   ├── MovieCard.jsx
    │   ├── MovieList.jsx
    │   ├── ProductionHouse.jsx
    │   ├── Slider.jsx
    │   └── carousel.jsx
    ├── Constant
    │   └── GenresList.jsx
    └── services
        └── ...
```

-----
