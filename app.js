const API = 'https://rickandmortyapi.com/api/character/';
const info_container = document.querySelector('.cards-container')
const audio = document.querySelector('#audio');
const volume_on = document.querySelector('#volume-on');
const volume_off = document.querySelector('#volume-off');
const volume_container = document.querySelector('.audio-container')

audio.volume = 1;

volume_off.addEventListener('click', playPause) 
volume_on.addEventListener('click', playPause)

function playPause(){
    if(audio.paused){
        audio.play()
        volume_off.classList.add('hide')
        volume_on.classList.add('show')
    }
    else {
        audio.pause()
        volume_off.classList.remove('hide')
        volume_on.classList.remove('show')
        volume_on.classList.add('hide')
    }
}


/* volume_off.addEventListener('click', function(){
    if(audio.paused){
        audio.play()
        volume_off.classList.add('hide')
    }
    else {
        audio.pause()
        volume_on.classList.add('hide')
        volume_off.classList.add('show')
    }
}) */
const mostrarInfo = (personaje) => {
    return (
        `<article>
        <img src="${personaje.image}">
        <h3>${personaje.name}</h3>
        <p>${personaje.species}</p>
        <p>${personaje.location.name}</p>
        </article>`
    )
}

const getData = (url_api) => {
    return fetch(url_api)
        .then(response => response.json())
}

const characterData = async (url_api) => {
    try {
        const alldata = await getData(url_api);
    /* const data_page2 = await getData(`${url_api}?page=2`); */
    console.log(alldata)
    const characters = await alldata.results
    console.log(characters)
    let character = characters.map(mostrarInfo)
    info_container.innerHTML = character.join('\n')    
    } 
    catch {
        const error = new Error(`Error ${API}`)
        console.log(error)
    }
}

characterData(API)
/* 
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
 */