function butt(){
	var nameForm = document.frm,
	 	name = prompt("Enter name (For example: Nazar)"),
		time = prompt("Enter time (For example: 19:00)"),
		place = prompt("Enter place (For example: Lviv)"),
		event = prompt("Enter event (For example: Meeting)");
			if (name&&time&&place&&event) {
				if (name.replace (/^[za-z, zA-Z]+$/, '').length || time.replace (/[0-9][0-9]:[0-9][0-9]$/, '').length || place.replace (/^[za-z, zA-Z]+$/, '').length || event.replace (/^[za-z, zA-Z]+$/, '').length) {
							alert ('Неправильно введені дані');
						}
						else {
							nameForm.fname.value=name+" has a "+event+" today at "+time+" somewhere in "+place;
						}
			}
			else{
				alert("Введіть дані у всі вказані поля")
			}		
} 

function convert(){
	var euro = prompt("Enter EURO"),
		dollar = prompt("Enter Dollars"),
		grneuro = euro*32.47,
		grndollar = dollar*27.322;
			if (euro && dollar) {
					if (euro.replace (/\d/g, '').length || dollar.replace (/\d/g, '').length) {
						alert ('В заданих полях можна вводити лише цифри!');
					}
						else {
							alert(euro+" euros are equal "+grneuro+" grns, "+dollar+" dollars are equal "+grndollar+" grns, one euro is equal 1.19 dollars");
						}
			}
			else {
				alert("Введіть дані у всі вказані поля")
			}
}





