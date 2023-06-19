import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Navigation from "./components/Navigation";
import NewMovieForm from "./components/NewMovieForm";
import Search from "./components/Search";

function App() {
  return (
    <div className="layout">
      <Header />

      <Navigation />

      <section id="content" className="content">

        <MoviesList />

      </section>

      <aside className="lateral">
        <Search />

        <NewMovieForm />
      </aside>

      <Footer />

    </div>
  );
}

export default App;
