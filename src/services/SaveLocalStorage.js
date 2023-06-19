// Esta función era para guardar pelis en LocalStore en principio, pero la hemos hecho para que sea reutilizable para otras cosas

// export const saveMovieLocalStorage = movie => {

//     // Conseguir los elementos del LocalStorage
//     const items = JSON.parse(localStorage.getItem('movies'))

//     // Comprobar si es un array
//     Array.isArray(items) ?
//         // Guardar una movie nueva al array items
//         items.push(movie)
//         :
//         // Crear un array con la nueva movie
//         items = [movie]
//     // Guardar en LocalStorage
//     localStorage.setItem('movies', JSON.stringify(items))

//     // Devolver objeto guardado (retornamos la nueva movie, sólo por si nos hiciese falta para algo)
//     return movie

// }

export const saveLocalStorage = (key, item) => {

    // Conseguir los elementos del LocalStorage
    let items = JSON.parse(localStorage.getItem(key))

    // Comprobar si es un array
    Array.isArray(items) ?
        // Guardar un nuevo item al array items
        items.push(item)
        :
        // Crear un array con el nuevo item
        items = [item]
    // Guardar en LocalStorage
    localStorage.setItem(key, JSON.stringify(items))

    // Devolver objeto guardado (retornamos el item item, sólo por si nos hiciese falta para algo)
    return item

}

