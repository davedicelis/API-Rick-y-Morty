async function getCharacters(done) {
    const URL_API = 'https://rickandmortyapi.com/api/character'

    const resultado = await fetch(URL_API);
    const data = await resultado.json()
    done(data);
    console.log(data)


}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/**html */`   
        
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `);
        const main = document.querySelector('main')

        main.append(article);

    });
})
