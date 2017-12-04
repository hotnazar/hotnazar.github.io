function butt(){
	var nameForm = document.frm,
	 	name = prompt("Enter name (For example: Nazar)"),
		time = prompt("Enter time (For example: 19:00)"),
		place = prompt("Enter place (For example: Lviv)"),
		event = prompt("Enter event (For example: Meeting)");
		nameForm.fname.value=name+" has a "+event+" today at "+time+" somewhere in "+place;
} 

function convert(){
	var euro = prompt("Enter EURO"),
		dollar = prompt("Enter Dollars"),
		grneuro = euro*32.47,
		grndollar = dollar*27.322;
		alert(euro+" euros are equal "+grneuro+" grns, "+dollar+" dollars are equal "+grndollar+" grns, one euro is equal 1.19 dollars");

}





