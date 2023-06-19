import React, { useState } from "react";

const Search = ({ moviesListState, setMoviesListState }) => {

    const [searching, setSearching] = useState("")
    const [notFound, setNotFound] = useState(false)


    const searchMovie = e => {

        // Crear un estado y actualizarlo
        setSearching(e.target.value)

        // Filtar en el listado las coincidencias

        let moviesFound = moviesListState.filter(movie => {
            return movie.title.toLowerCase().includes(searching.toLocaleLowerCase())
        })

        // Definir sólo busquedas de mas de dos letras
        if (searching.length <= 1 || moviesFound <= 0) {
            moviesFound = JSON.parse(localStorage.getItem("movies"))
            setNotFound(true)
        } else {
            setNotFound(false)

        }

        // Devolver el valor
        setMoviesListState(moviesFound)

    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {
                notFound == true && searching.length >= 2 && < span className="not-found">*No se han encontrado coincidencias</span>

            }
            <form>
                <input onChange={searchMovie} type="text" id="search_field" name="search" autoComplete="off" />
                <button id="search">Buscar</button>
            </form>
        </div >

    )
}

export default Search