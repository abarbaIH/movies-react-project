import React from "react";

const EditMovie = ({ movie, getMovies, setEdit, setMoviesListState }) => {

    const componentTitle = "Editar Película"

    const saveEditMovie = (e, id) => {
        e.preventDefault()

        // Traernos las peliculas
        const moviesStorage = getMovies()

        // Buscar el indice del objeto dentro del array de la pelicula a actualizar
        const index = moviesStorage.findIndex(movie => movie.id === id)

        // Crear objeto que coincida con el index
        let movieUpdated = {
            id,
            title: e.target.title.value,
            description: e.target.description.value,
        }

        // Actualizar el elemnto que coincida el index con la modificacion realizada en el form
        moviesStorage[index] = movieUpdated

        // Guardar el nuevo array en localstorage
        localStorage.setItem('movies', JSON.stringify(moviesStorage))

        // Actaulizar el estados (para que cerrar el formulario y actualice el listado)
        setMoviesListState(moviesStorage)
        setEdit(0)

    }

    return (
        <div className="edit_form">
            <h3 className="title">{componentTitle}:</h3>
            <form onSubmit={e => saveEditMovie(e, movie.id)}>
                <input type="text" name="title" className="edit_title" defaultValue={movie.title} />
                <textarea name="description" className="edit_description" defaultValue={movie.description}></textarea>
                <input type="submit" className="edit" value="Actualizar" />

            </form>
        </div>
    )
}

export default EditMovie