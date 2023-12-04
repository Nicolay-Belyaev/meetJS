const getAllCharacter = async () => {
     await fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
         .then(json => characters = json)
}
