'use strict';
const buttonsWrapper = document.querySelector('.buttons');
const counter = document.getElementById('counter');
const unClickedButtonText = 'Нажми меня!';
const clickedButtonText = 'Нажата!';
let count = 0;

function createButtons(quantity = 5){
	for(let i = 0; i < quantity; i++){
		const button = document.createElement('button');
		button.classList.add('button');
		button.setAttribute('button-id',i);
		button.textContent = unClickedButtonText;
		buttonsWrapper.appendChild(button);
	}
}

createButtons();

buttonsWrapper.addEventListener('click', function(event){
	click(event.target)
});

function click(target){
	const buttonId = target.getAttribute('button-id');
	for(const button of [...buttonsWrapper.children]){
		if(button.getAttribute('button-id' ) === buttonId){
			button.textContent = clickedButtonText;
			button.classList.add('active');
			count++;
			counter.innerText = count;
			continue;
		}
			button.textContent = unClickedButtonText;
			button.classList.remove('active');
			
	}
}
