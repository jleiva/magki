fillTable();

function fillTable() {
	var tbody = document.querySelector('#tblIncomeStatement tbody');
	tbody.innerHTML = '';
	var incomesTotal = 0;
	var expensesTotal = 0;
	var netProfit = 0; 

  var row = tbody.insertRow();
	var description = row.insertCell();
	description.innerHTML = '<strong> INGRESOS </strong>';
	var accountName = row.insertCell();
	accountName.innerHTML = 'Venta entradas';
	var amount = row.insertCell();
	amount.innerHTML = 100000;
	incomesTotal  = incomesTotal + parseInt(amount.innerHTML);
	var total = row.insertCell();

	row = tbody.insertRow();
	description = row.insertCell();
	accountName = row.insertCell();
	accountName.innerHTML = 'Donación equipo';
	amount = row.insertCell();
	amount.innerHTML = 150000;
	incomesTotal  = incomesTotal + parseInt(amount.innerHTML);
	total = row.insertCell();

	row = tbody.insertRow();
	description = row.insertCell();
	accountName = row.insertCell();
	accountName.innerHTML = 'Donación alimentos';
	amount = row.insertCell();
	amount.innerHTML = 165000;
	incomesTotal  = incomesTotal + parseInt(amount.innerHTML);
	total = row.insertCell();

	row = tbody.insertRow();
	description = row.insertCell();
	accountName = row.insertCell();
	accountName.innerHTML = 'Donación monetaria';
	amount = row.insertCell();
	amount.innerHTML = 200000;
	incomesTotal  = incomesTotal + parseInt(amount.innerHTML);
	total = row.insertCell();
	total.innerHTML = '<strong>' +  incomesTotal + '</strong>';

	row = tbody.insertRow();
	description = row.insertCell();
	description.innerHTML = '<strong> GASTOS </strong>';
	accountName = row.insertCell();
	accountName.innerHTML = 'Alquiler edificio';
	amount = row.insertCell();
	amount.innerHTML = 200000;
	expensesTotal = expensesTotal + parseInt(amount.innerHTML);
	total = row.insertCell();

	row = tbody.insertRow();
	description = row.insertCell();
	accountName = row.insertCell();
	accountName.innerHTML = 'Alquiler equipo';
	amount = row.insertCell();
	amount.innerHTML = 100000;
	expensesTotal = expensesTotal + parseInt(amount.innerHTML);
	total = row.insertCell();
	total.innerHTML = '<strong>' +  expensesTotal + '</strong>';

	row = tbody.insertRow();
	description = row.insertCell();
	description.innerHTML = '<strong> GANANCIA(PÉRDIDA) NETA</strong>';
	accountName = row.insertCell();
	amount = row.insertCell();
	total = row.insertCell();
	netProfit = incomesTotal - expensesTotal;
	total.innerHTML = '<strong>' +  netProfit + '</strong>';
}