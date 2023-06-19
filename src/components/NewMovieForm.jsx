import React from "react";

const NewMovieForm = () => {
    return (
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <form>
                <input type="text" id="title" placeholder="Titulo" />
                <textarea id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}

export default NewMovieForm