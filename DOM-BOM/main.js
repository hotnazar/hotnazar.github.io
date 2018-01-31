function addElement(){
	var newForm = document.createElement('form');
	newForm.setAttribute("name", "login")
	newForm.setAttribute("action", "google.com")
	document.body.appendChild(newForm);

	var inputAge = document.createElement('input');
	inputAge.setAttribute("type", "text")
	inputAge.setAttribute("name", "age")
	newForm.appendChild(inputAge);

	var inputUsername = document.createElement('input');
	inputUsername.setAttribute("type", "text")
	inputUsername.setAttribute("name", "username")
	newForm.appendChild(inputUsername);

	var inputDate = document.createElement('input');
	inputDate.setAttribute("type", "text")
	inputDate.setAttribute("name", "date")
	newForm.appendChild(inputDate);

	var inputSubmit = document.createElement('input');
	inputSubmit.setAttribute("type", "submit")
	inputSubmit.setAttribute("value", "Validate me")
	inputSubmit.setAttribute("onclick", "validateForm()")
	newForm.appendChild(inputSubmit)


}
function validateForm()
{
    var z = document.forms["login"]["age"].value;
		if(!/^[0-9]+$/.test(z)){
		  alert("'Age' field should contain only numbers")
		  event.preventDefault();
		  return false;  
		 }
     z = document.forms["login"]["username"].value;
        if(!z.match(/^user_/)){
          alert("Nickname should starts from 'user_'")
          event.preventDefault();
          return false;
         }
      z = document.forms["login"]["date"].value;
        if(!z.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)){
          alert("Incorect date!")
          event.preventDefault();
          return false;
         }




         alert("All is correct")
    event.preventDefault();
}
