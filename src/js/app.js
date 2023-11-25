var parent, inputPurchase, NewPurchase, ClosePurchase, NewTask;

listPurchases = document.createElement('div');

function addNewPurchase() {

	parent = document.querySelector('.purchases');

	NewPurchase = document.createElement('ul');

	inputPurchase = document.getElementById('inputPurchase').value;

	NewTask = document.createElement('li');
	NewTask.textContent = inputPurchase;

	ClosePurchase = document.createElement('li');
	ClosePurchase.textContent = "X";

	localStorage.setItem('Task', inputPurchase);
	console.log(localStorage.getItem('Task'));

	inputPurchase = document.getElementById('inputPurchase').value = "";

	ClosePurchase.addEventListener( "click" , () => parent.removeChild(Element));

	parent.appendChild(listPurchases);
	listPurchases.appendChild(NewPurchase);
	NewPurchase.appendChild(NewTask);
	NewPurchase.appendChild(ClosePurchase);

}

function clearAllPurchases() {
	
	clearPurchases = document.getElementById('minus');

	clearPurchases.addEventListener( "click" , () => parent.removeChild(listPurchases));

}