import React, { useEffect, useState } from "react";
import EditMovie from "./EditMovie";

const MoviesList = ({ moviesListState, setMoviesListState }) => {

    const [edit, setEdit] = useState(0)

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        let allMovies = JSON.parse(localStorage.getItem('movies'))
        setMoviesListState(allMovies)
        return allMovies //me retorno las movies para poder reutilizarlo
    }

    const deleteMovie = id => {

        // conseguir peliculas almacenadas en LocalStorage
        let moviesStorage = getMovies()

        // filtrar por id para eliminar ese id (lo pasamos a numero para que no haya problemas)
        let moviesFiltered = moviesStorage.filter(movie => movie.id !== parseInt(id))

        // actualizar el listado
        setMoviesListState(moviesFiltered)

        // actualizar datos en localstorage para que nos lo elimine tb de ahí
        localStorage.setItem('movies', JSON.stringify(moviesFiltered))

    }

    return (
        <>
            {
                moviesListState ?
                    moviesListState.map(movie => {
                        return (
                            <article key={movie.id} className="movie-item">
                                <h3 className="title">{movie.title}</h3>
                                <p className="description">{movie.description}</p>
                                <button onClick={() => setEdit(movie.id)} className="edit">Editar</button>
                                <button onClick={() => deleteMovie(movie.id)} className="delete">Borrar</button>
                                {edit === movie.id && (
                                    <EditMovie movie={movie} getMovies={getMovies} setEdit={setEdit} setMoviesListState={setMoviesListState} />

                                )}
                            </article>
                        )
                    })
                    :
                    <p>No hay películas disponibles</p>
            }


        </>
    )
}

export default MoviesList