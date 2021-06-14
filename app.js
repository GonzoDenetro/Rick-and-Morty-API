const API = 'https://rickandmortyapi.com/api/character/';
const info_container = document.querySelector('.cards-container')

const mostrarInfo = (personaje) => {
    return (
        `<article>
        <img src="${personaje.image}">
        <p>${personaje.name}</p>`
    )
}
const getData = async () => {
    try {
        const data = await fetch(API)
        const data2 = await fetch(`${API}?page=2`)
        const resp = await data.json()
        const resp2 = await data2.json()
        const characters = await resp.results
        const characters2 = await resp2.results
        let charachter = await characters.map(mostrarInfo)
        let character2 = await characters2.map(mostrarInfo)
        info_container.innerHTML = charachter.join('\n') + character2.join('\n')
    } 
    catch {
        const error = new Error(`Error ${API}`)
        console.log(error)
    }
}
getData()
