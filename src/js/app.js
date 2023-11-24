var parent, inputPurchase, NewTask;

function addNewPurchase() {

	parent = document.querySelector('.purchases');

	inputPurchase = document.getElementById('inputPurchase').value;

	NewTask = document.createElement('p');
	NewTask.textContent = inputPurchase;

	parent.appendChild(NewTask);

	localStorage.setItem('Task', inputPurchase)
	console.log(localStorage.getItem('Task'))

}