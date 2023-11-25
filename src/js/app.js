var parent, inputPurchase, NewPurchase, ClosePurchase, NewTask;

function addNewPurchase() {

	parent = document.querySelector('.purchases');

	NewPurchase = document.createElement('ul');

	parent.appendChild(NewPurchase);

	inputPurchase = document.getElementById('inputPurchase').value;

	NewTask = document.createElement('li');
	NewTask.textContent = inputPurchase;

	ClosePurchase = document.createElement('li');
	ClosePurchase.textContent = "X";

	NewPurchase.appendChild(NewTask);
	NewPurchase.appendChild(ClosePurchase);

	localStorage.setItem('Task', inputPurchase);
	console.log(localStorage.getItem('Task'));

	inputPurchase = document.getElementById('inputPurchase').value = "";

}