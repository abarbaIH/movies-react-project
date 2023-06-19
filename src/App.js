import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Navigation from "./components/Navigation";
import NewMovieForm from "./components/NewMovieForm";
import Search from "./components/Search";

function App() {

  const [moviesListState, setMoviesListState] = useState([])


  return (
    <div className="layout">
      <Header />

      <Navigation />

      <section id="content" className="content">

        <MoviesList moviesListState={moviesListState} setMoviesListState={setMoviesListState} />

      </section>

      <aside className="lateral">
        <Search moviesListState={moviesListState} setMoviesListState={setMoviesListState} />

        <NewMovieForm setMoviesListState={setMoviesListState} />
      </aside>

      <Footer />

    </div>
  );
}

export default App;
