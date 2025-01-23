'use strict'

const url = 'https://pokeapi.co/api/v2/pokemon';
const page = {
    pokemonsSelect: document.getElementById('pokemon-select'),
    description: {
        container: document.getElementById('description-container'),
        effects: {
            short: document.getElementById('short-effect'),
            effect: document.getElementById('effect')
        }
    },
    error: document.getElementById('error-message')
}

function getGata(url, errorMessage = 'unknown error, repeat the request.') {
    return fetch(url).then(response => {
        if(!response.ok) {
            throw new Error(`${errorMessage} ${response.status}`).message;
        }

        return response.json();
    })
}

getGata(url, 'No Pokemons found:')
    .then(({results}) => {
        createPokemons(results);
    })
    .catch(error => {
        showError(error)});



page.pokemonsSelect.addEventListener('change', (event) => {
    const selectedSlug = event.target.value;
    if (selectedSlug) {
        getGata(`${url}/${selectedSlug}`)
            .then(({abilities}) => {
                console.log(abilities[0].ability.url);
                return abilities[0].ability.url;
            })
            .then(url => {
                getGata(url, "couldn't get a description:")
                .then(({effect_entries}) => {
                    if(findDescription(effect_entries) != -1) {
                        const effects = effect_entries[findDescription(effect_entries)]; 
                        showContent(effects);
                    }
                })
                .catch(error => showError(error));
            })
            .catch(error => showError(error));
    } else {
        clearContent();
    }
});

function createPokemons(pokemons){
    for(const p of pokemons){
        const pokemon = document.createElement('option');
        pokemon.innerText = p.name;
        pokemon.value = p.name;
        page.pokemonsSelect.appendChild(pokemon);
    }
}


function showError(errorMessage){
    page.error.innerText = '';
    page.error.classList.remove('hidden');
    page.error.classList.add('visible');
    page.error.innerText = errorMessage;
}

function showContent(content) {
    if(content) {
        page.description.container.classList.remove('hidden');
        page.description.container.classList.add('visible');
    
        page.description.effects.short.classList.remove('hidden');
        page.description.effects.short.classList.add('visible');
        page.description.effects.short.innerText = content.short_effect;
    
        page.description.effects.effect.classList.remove('hidden');
        page.description.effects.effect.classList.add('visible');
        page.description.effects.effect.innerText = content.effect;
    }
}

function clearContent(){
    page.description.container.classList.remove('visible');
    page.description.container.classList.add('hidden');
    page.description.effects.short.innerText = '';
    page.description.effects.effect.innerText = '';
}

function findDescription(effects){
    return effects.findIndex(e => e.language.name === "en")
}