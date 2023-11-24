function addNewPurchase() {
	var parent = document.querySelector('.purchases');

	var inputPurchase = document.getElementById('inputPurchase').value;

	var NewTask = document.createElement('p');
	NewTask.textContent = inputPurchase;

	parent.appendChild(NewTask);
}