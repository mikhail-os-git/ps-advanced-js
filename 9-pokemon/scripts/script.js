const page = {
	buttonsContainer: document.getElementById('buttons-container'),
	desc: document.querySelector('.desc'),
	effect: document.getElementById('effect'),
	shortEffect: document.getElementById('short-effect'),
	loadingElement: document.getElementById('loadingElement')
}

let pokemons;

	const request = new XMLHttpRequest();
	request.open('GET', 'https://pokeapi.co/api/v2/pokemon');
	request.send();
	request.addEventListener('load', function() {
 	const data = JSON.parse(this.responseText);
	pokemons = data.results;
	
	})


	setTimeout(() =>{
		showPokemons(pokemons);
	}, 1000);

	function showPokemons(pokemons){
		for(const pokemon of pokemons) {
			const poke = document.createElement('button');
			poke.classList.add('pokemon-button');
			poke.innerText = pokemon.name;
			poke.onclick = function() {
				showStat(pokemon.name); 
			};
			page.buttonsContainer.appendChild(poke);
		}
	};

function showStat(name) {
	page.desc.classList.add('none');
	const request = new XMLHttpRequest();
	request.open('GET', `https://pokeapi.co/api/v2/pokemon/${name}`);
	request.send();

	request.addEventListener('load', function() { 
		const data = JSON.parse(this.responseText);
		const abilities = data.abilities;
		const abilityUrl = abilities[0].ability.url;
		getEffects(abilityUrl);
	});
}

function getEffects(url) {
	const request = new XMLHttpRequest();
	request.open('GET', url);
	request.send();
	page.loadingElement.classList.remove('none');
	request.addEventListener('load', function() {
		const data = JSON.parse(this.responseText);
		page.loadingElement.classList.add('none')
		showEffects(data);
	});
}

function showEffects(data) {
		const index = data.effect_entries.findIndex(entry => entry.language.name === 'en');
		if(index != -1) {
			const effectEntries = data.effect_entries[index];
			
			page.effect.innerText = '';
			page.shortEffect. innerHTML = '';
	
			page.effect.innerText = effectEntries.effect;
			page.shortEffect. innerHTML = effectEntries.short_effect;
		} else {
		page.desc.classList.remove('none');
		page.desc.innerHTML = 'Effects not found.';
		}
}