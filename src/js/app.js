var parent, inputPurchase, NewPurchase, ClosePurchase, NewTask, returnNumber;

listPurchases = document.createElement('div');

taska = 'taska';
taskNumber = 0	;

function addNewPurchase() {

	parent = document.querySelector('.purchases');

	NewPurchase = document.createElement('ul');

	inputPurchase = document.getElementById('inputPurchase').value;

	NewTask = document.createElement('li');
	NewTask.textContent = inputPurchase;

	ClosePurchase = document.createElement('li');
	ClosePurchase.textContent = "X";

	taska = 'taska' + `${taskNumber}`;
	localStorage.setItem(taska, inputPurchase);

	taskNumber ++;
	taska = 'taska' + `${taskNumber}`;
	console.log(taska);

	ClosePurchase.addEventListener( "click" , () => parent.removeChild(Element));

	parent.appendChild(listPurchases);
	listPurchases.appendChild(NewPurchase);
	NewPurchase.appendChild(NewTask);
	NewPurchase.appendChild(ClosePurchase);

	inputPurchase = document.getElementById('inputPurchase').value = "";

}

function returnLastPurchases() {

	parent = document.querySelector('.purchases');

	returnNumber = document.getElementById('returnNumber').value;

	for (var i = 0; i < returnNumber; i++) { // выведет 0, затем 1, затем 2
		NewPurchase = document.createElement('ul');

		inputPurchase = document.getElementById('inputPurchase').value;

		NewTask = document.createElement('li');
		NewTask.textContent = localStorage.getItem('taska' + i);

		ClosePurchase = document.createElement('li');
		ClosePurchase.textContent = "X";

		parent.appendChild(listPurchases);
		listPurchases.appendChild(NewPurchase);
		NewPurchase.appendChild(NewTask);
		NewPurchase.appendChild(ClosePurchase);
	}

}

function clearAllPurchases() {

	clearPurchases = document.getElementById('minus');

	clearPurchases.addEventListener( "click" , () => parent.removeChild(listPurchases));

}