import React, { useState } from "react";
import { saveLocalStorage } from "./../services/SaveLocalStorage";

const NewMovieForm = ({ setMoviesListState }) => {

    const componentTitle = "Añadir Película"

    const [movie, setMovie] = useState({
        title: "",
        description: ""
    })

    const { title, description } = movie

    const handleSubmit = e => {
        e.preventDefault()

        // Crear objeto de la película a guardar
        const newMovie = {
            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value
        }

        // Actualizar estado del listadao de peliculas
        setMoviesListState(elements => {
            return [newMovie, ...elements]
        })

        // Guardar Estado
        setMovie(newMovie)

        // Guardar en LocalStorage (services)
        saveLocalStorage('movies', newMovie)


    }

    return (

        <div className="add">
            <h3 className="title">{componentTitle}</h3>
            <strong>{(title && description && "has creado la peli: " + title)}</strong>


            <form onSubmit={handleSubmit}>
                <input type="text" id="title" name="title" placeholder="Titulo" />
                <textarea id="description" name="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>

        </div>

    )
}

export default NewMovieForm