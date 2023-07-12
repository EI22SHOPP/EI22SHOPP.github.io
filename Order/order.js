let itemOrder = [
	{
		dipesan :false,
		harga : 15000,
		nama : 'Bakso',
	},

	{
		dipesan :false,
		harga : 25000,
		nama : 'Nasgor',
	},


	{
		dipesan :false,
		harga : 10000,
		nama : 'Wedang Jahe',
	},
];

let totalOrder = 0;

const textTotal = document.getElementById('last-item');

const itemTerpilih = document.getElementsByClassName('item');

for(let i = 0; i < itemTerpilih.length; i++){
	itemTerpilih[i].addEventListener('click', function(){
		setItemPemesanan(i, itemTerpilih[i]);
	});
}

function setItemPemesanan(index, elemen){
	if (itemOrder[index].dipesan == false){
		itemOrder[index].dipesan = true;
		elemen.style.backgroundColor = "brown";
		elemen.style.color = "white";
		totalOrder = totalOrder + itemOrder[index].harga;
	}

	else{
		itemOrder[index].dipesan = false;
		elemen.style.backgroundColor = "aqua";
		elemen.style.color = "black";
		totalOrder = totalOrder - itemOrder[index].harga;
	}

	textTotal.innerHTML = 'Total <span>Rp ' + totalOrder + '</span>'
}