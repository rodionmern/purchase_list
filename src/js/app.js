var parent, inputPurchase, NewPurchase, ClosePurchase, NewTask;

listPurchases = document.createElement('div');

taska = 'taska';
taskNumber = -1;

function addNewPurchase() {

	parent = document.querySelector('.purchases');

	NewPurchase = document.createElement('ul');

	inputPurchase = document.getElementById('inputPurchase').value;

	NewTask = document.createElement('li');
	NewTask.textContent = inputPurchase;

	ClosePurchase = document.createElement('li');
	ClosePurchase.textContent = "X";

	localStorage.setItem(taska, inputPurchase);
	taskNumber = taskNumber + 1;
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

	for (var i = 0; i < 5; i++) { // выведет 0, затем 1, затем 2
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

	// document.getElementById('listPurchases').innerHTML = localStorage.getItem('taska');
	// document.getElementById('listPurchases').innerHTML = localStorage.getItem('taska1');
	// document.getElementById('listPurchases').innerHTML = localStorage.getItem('taska2');
	// document.getElementById('listPurchases').innerHTML = localStorage.getItem('taska3');
	// document.getElementById('listPurchases').innerHTML = localStorage.getItem('taska4');
	// document.getElementById('listPurchases').innerHTML = localStorage.getItem('taska5');
	// document.getElementById('listPurchases').innerHTML = localStorage.getItem('taska6');

}

function clearAllPurchases() {

	clearPurchases = document.getElementById('minus');

	clearPurchases.addEventListener( "click" , () => parent.removeChild(listPurchases));

}